import React, { Fragment, useEffect, useState } from 'react'
import { Button, Pagination, Table } from 'react-bootstrap'
import { useFetchOpenTrades } from '../../hooks/useFetchOpenTrades'
import { tradeServiceOpenTrade } from '../../services/tradeService/interfaces'
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
    console.log("useEffect");
    setOpenTrades(
      data.slice(currentPage * perPage, (currentPage + 1) * perPage)
    )
  }, [currentPage,data])


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
          {openTrades.map((item) => (
            <tr key={item.Id}>
              <td>{item.Id}</td>
              <td>
                <img width={25} src={item.Coin.Image} alt={item.Coin.Name} />{' '}
                <b>{item.Coin.ShortName}</b> {item.Coin.Name}
              </td>
              <td className="text-center">{item.EntryPrice}</td>
              <td className="text-center">{item.CurrentPrice}</td>
              <td className="text-center">{item.Profit}</td>
              <td className="text-center">{item.Graph}</td>
              <td>
                <Button type="button">
                  <span className="material-symbols-outlined">more_vert</span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination size="sm">{pages}</Pagination>
      {totalCount}
    </Fragment>
  )
}
