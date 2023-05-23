import React, { Fragment } from 'react'
import { Col, Row, Stack } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useFetchMyStrategies } from '../../hooks/useFetchMyStrategies'
import { StyledStack } from './Strategy.style'




export const Strategy: React.FC = () => {
  const myStrategies = useFetchMyStrategies()
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
        {myStrategies.map((strategy) =>
        (
          <Col md={6} xxl={3}  key={strategy.id}>
            <div className='border p-4 rounded-4'>
              <h5 className='card-title'>{strategy.name}</h5>
              <hr className="my-2" />
              <div className='strategy-signals-height'>              
              {strategy.signals.map((signal,i) => (
                <div key={i}>
                  <StyledStack direction='horizontal' className=' justify-content-between'>
                    <p className='fw-semibold'>{signal.indicator}</p>
                    <p className='text-success fw-semibold'>{signal.rule}</p>
                  </StyledStack>
                  <StyledStack direction='horizontal' className=' justify-content-between'>
                    <p className='text-secondary '>Period: {signal.period}</p>
                    <p className='text-secondary'>Interval:{strategy.interval}</p>
                  </StyledStack>
                  <hr className="my-2" />
                </div>
              )
              )}
              </div>            
              <div className='strategy-card-buttons d-flex justify-content-between mt-5'>               
                <button className="btn btn-sm px-5  py-2 btn-primary" type="button">
                  Edit
                </button>
                <button className="btn btn-sm px-5  py-2 btn-danger" type="button">
                  Delete
                </button>
              </div>        
            </div>
          </Col>

        )






        )}

      </Row>




    </Fragment>
  )
}
