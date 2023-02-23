import React, { Fragment } from 'react'
import { Col, Row, Stack } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { StyledStack } from './Strategy.style'


export const Strategy: React.FC = () => {
  return (
    <Fragment>
      <Stack
        direction="horizontal"
        className="align-items-center justify-content-between pb-5"
      >
        <h1>My Strategies</h1>
        <NavLink className="btn btn-primary" to="/create-strategy">
          +  Create Strategy
        </NavLink>
      </Stack>

      <Row>
      <Col md={6} xxl={3} className="p-3">
         <div className='border p-4 rounded-4'>
          <h5 className='card-title'>EMA 9 - 40 CROSS</h5>
          <hr className="my-2" /> 
          <StyledStack direction='horizontal' className='align-items-start justify-content-between'>
            <p className='fw-semibold'>EMA</p>
            <p className='text-success fw-semibold'>Crosses Over</p>
          </StyledStack>
          <StyledStack direction='horizontal' className='align-items-start justify-content-between'>
            <p className='text-secondary '>Period: 9</p>
            <p className='text-secondary'>Interval: 1m</p>
          </StyledStack>
          <hr className="my-2" /> 
          <StyledStack direction='horizontal' className='align-items-start justify-content-between'>
            <p className='fw-semibold'>EMA</p>
            <p className='text-danger fw-semibold'>Crosses Above</p>
          </StyledStack>
          <StyledStack direction='horizontal' className='align-items-start justify-content-between'>
            <p className='text-secondary '>Period: 40</p>
            <p className='text-secondary'>Interval: 1m</p>
          </StyledStack>
          <Stack direction='horizontal' className='align-items-start justify-content-between mt-5'>
            <button className="btn btn-sm px-5 py-2 btn-primary" type="button">
              Edit
            </button>
            <button className="btn btn-sm px-5 py-2 btn-danger" type="button">
              Delete
            </button>



          </Stack>
         </div>
        </Col>
      </Row>

      

      
    </Fragment>
  )
}
