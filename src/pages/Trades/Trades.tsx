import React, { Fragment, useEffect, useState } from 'react'
import { Button, Pagination, Table } from 'react-bootstrap'
import { useFetchOpenTrades } from '../../hooks/useFetchOpenTrades'
import { KlineHeader, tradeServiceOpenTrade } from '../../services/tradeService/interfaces'
import Example from '../../components/AppGraph/AppGraph'

export const Trades: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const data = useFetchOpenTrades()
  const perPage = 10
  const pages: any = []
  const totalCount = data.length
  function initPagination() {
    for (let number = 0; number < data.length / perPage; number++) {
      pages.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => setCurrentPage(number)}
        >
          {number + 1}
        </Pagination.Item>
      )
    }
  }
  initPagination()
  const [openTrades, setOpenTrades] = useState<tradeServiceOpenTrade[]>(data)
  useEffect(() => {
    setOpenTrades(
      data.slice(currentPage * perPage, (currentPage + 1) * perPage)
    )
  }, [currentPage, data])


  // const getProfit = (oldPrice:number, newPrice:number) => {
  //   if (oldPrice === 0) oldPrice += 1;
  //   if (newPrice === 0) newPrice = oldPrice;
  //   return Number((((newPrice - oldPrice) / oldPrice) * 100).toFixed(2));
  // };

  // function connectBinanceFeatureWS(baseAsset:string,quoteAsset:string){
  //   const pair = baseAsset+quoteAsset;
  //   const wsc = new ws.WebSocket(`wss://fstream.binance.com/ws/${pair}@kline_1m`);

  //   // wsc.on("open", () => wsc.send(Date.now().toString(), { mask: true }));
  //   // wsc.on("close", () => console.log("disconnected"));
  //   // wsc.on("error", error => {
  //   //     console.log(`unexpected response: ${error}`);
  //   // });
  //   wsc.on("message", (wsData) => {
  //      if (wsData) {
  //       const trade = JSON.parse(wsData.toString());
  //       let getAsset:any = openTrades.find(op=>`${op.Coin.BaseAsset}${op.Coin.QuoteAsset}` == trade.s);
  //       getAsset.CurrentPrice = parseFloat(trade.k.c);
  //       getAsset.Profit = getProfit(getAsset.EntryPrice,getAsset.CurrentPrice);
  //       getAsset.Graph.shift();
  //       getAsset.Graph.push({ "close": parseFloat(trade.k.c),"date": trade.k.T});
  //      }
  //   });
  // }

  // openTrades.map(ot=> connectBinanceFeatureWS(ot.Coin.BaseAsset.toString(),ot.Coin.QuoteAsset.toString()))
  return (
    <Fragment>
      <h1>Open Trades</h1>
      <Table hover size="sm" className="p-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th className="text-center">Entry Price</th>
            <th className="text-center">Current Price</th>
            <th className="text-center">Profit %</th>
            <th className="text-center">Visualize</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {openTrades.map((item) => {
            return (
              <tr key={item.Id}>
                <td>{item.Id}</td>
                <td>
                  <img width={25} src={item.Coin.Image} alt={item.Coin.Name} />{' '}
                  <b>{item.Coin.BaseAsset}</b> {item.Coin.Name}
                </td>
                <td className="text-center">{item.EntryPrice}</td>
                <td className="text-center">{item.CurrentPrice}</td>
                <td
                  className={`text-center ${
                    item.Profit > 0 ? 'text-success' : 'text-danger'
                  }`}
                >
                  {' '}
                  <b>{item.Profit}</b>{' '}
                </td>
                <td className="text-center cursor-none">
                  <Example
                    color={item.Profit > 0 ? '#09BD3C' : '#FD5353'}
                    stock={item.Graph}
                    width={150}
                    height={36}
                  />
                </td>
                <td>
                  <Button type="button" variant="light">
                    <span className="material-symbols-outlined">more_vert</span>
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Pagination size="sm">
        <Pagination.Prev
          onClick={() => {
            {
              if (currentPage > 0) setCurrentPage(currentPage - 1)
            }
          }}
        />
        {pages}
        <Pagination.Next
          onClick={() => {
            {
              if (currentPage < 1) setCurrentPage(currentPage + 1)
            }
          }}
        />
      </Pagination>
      {totalCount} <br />
      {currentPage}
    </Fragment>
  )
}
