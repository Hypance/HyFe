import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'

import MarketTable from './MarketTable'


export const Market: React.FC = () => (
  <Fragment>
    <Container fluid>
      <h2 className='page-title'>Market</h2>

      <MarketTable></MarketTable>





    </Container>


  </Fragment>
)
