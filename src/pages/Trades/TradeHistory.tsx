import React, { Fragment } from 'react'
import { useFetchOpenTrades } from '../../hooks/useFetchOpenTrades';
export const Trades: React.FC = () => {
  const data = useFetchOpenTrades();
  return (
    <Fragment>
      <h1>Open Trades</h1>
    </Fragment>
  )
}
