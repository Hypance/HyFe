import React, { Fragment, useEffect, useState } from 'react'
import { Button, Pagination, Table } from 'react-bootstrap'
import { useFetchBacktestDetail } from '../../hooks/useFetchBacktestDetail'
import { backtestServiceBacktestDetail } from '../../services/backtestService/interfaces'



export const BacktestDetail: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const data = useFetchBacktestDetail()
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
  const [openTrades, setOpenTrades] = useState<backtestServiceBacktestDetail  []>(data)
  useEffect(() => {
    setOpenTrades(
      data.slice(currentPage * perPage, (currentPage + 1) * perPage)
    )
  }, [currentPage, data])

  
  return (
    <Fragment>
      <h2 className='page-title'>Backtest Detail</h2>
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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img width={25} src={item.assetName.image} alt={item.assetName.name} />{' '}
                {item.assetName.name}
                </td>
                <td className="text-center">{item.entryPrice}</td>
                <td className="text-center">{item.closePrice}</td>
                <td
                  className={`text-center ${
                    item.profit > 0 ? 'text-success' : 'text-danger'
                  }`}
                >
                  {' '}
                  <b>{item.profit}</b>{' '}
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