import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Websocket from './websocket'


export const Market: React.FC = () => {
  return (
    <Fragment>
      <Container fluid>
        <h2 className='page-title'>Market</h2>

        <Websocket></Websocket>
        
        



      </Container>
      
     
    </Fragment>
  )
}
