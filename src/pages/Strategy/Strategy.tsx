import React, { Fragment, useEffect, useState } from 'react'
import { Col, Row, Stack } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useFetchMyStrategies } from '../../hooks/useFetchMyStrategies'
import { StyledStack } from './Strategy.style'
import { AppPathes } from '../../components/AppRouter/interfaces'
import InfiniteScroll from 'react-infinite-scroll-component'



export const Strategy: React.FC = () => {
  const {myStrategies,fetchMoreData,hasMore,setMyStrategies,allMyStrategies} = useFetchMyStrategies();
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    // console.log("myStrategies length:", myStrategies.length);
    // console.log("hasMore:", hasMore);
    if (hasMore) {
      fetchMoreData();
    }
  }, [hasMore]);

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
      <InfiniteScroll
        dataLength={myStrategies.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
      <Row>
        {myStrategies.map((strategy) =>
        (
          <Col md={6} xxl={3} key={strategy.id}>
            <div className='border p-4 rounded-4 m-1'>
              <h5 className='card-title'>{strategy.name}</h5>
              <hr className="my-2" />
              <div className='strategy-signals-height'>
                <StyledStack>
                    <StyledStack direction='horizontal' className=' justify-content-between'>
                      <p className='fw-semibold'>{strategy.indicator}</p>
                      <p className='text-success fw-semibold'>{strategy.provision}</p>
                    </StyledStack>
                    <StyledStack direction='horizontal' className=' justify-content-between'>
                      <p className='text-secondary '>Period: {strategy.period}</p>
                      <p className='text-secondary'>Interval:{strategy.interval}</p>
                    </StyledStack>
                    <hr className="my-2" />
                  </StyledStack>
                  <StyledStack>
                    <StyledStack direction='horizontal' className=' justify-content-between'>
                      <p className='fw-semibold'>{strategy.crossingIndicator}</p>
                    </StyledStack>
                    <StyledStack direction='horizontal' className=' justify-content-between'>
                      <p className='text-secondary '>Period: {strategy.crossingIndicatorPeriod}</p>
                    </StyledStack>
                    <hr className="my-2" />
                  </StyledStack>
              </div>
              <div className='strategy-card-buttons d-flex justify-content-between mt-5'>
                <Link  
                        to={`${AppPathes.EDITSTRATEGY}/${strategy.id}`} className=" btn btn-primary btn-md text-white" 
                 >
                  Edit
                </Link>
                <button className="btn btn-sm px-5  py-2 btn-danger" type="button">
                  Delete
                </button>
              </div>
            </div>
          </Col>

        )






        )}

      </Row>
      </InfiniteScroll>



    </Fragment>
  )
}
