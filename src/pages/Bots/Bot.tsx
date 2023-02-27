import React, { Fragment } from 'react'
import { Col,  Row, Stack } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useFetchMyBots } from '../../hooks/useFetchMyBots';
export const Bot: React.FC = () => {
  const myBots = useFetchMyBots();
  return (
    <Fragment>
      <Stack
        direction="horizontal"
        className="align-items-center justify-content-between pb-5"
      >
        <h1>Bot</h1>
        <NavLink className="btn btn-primary" to="/create-bot">
          Create Bot
        </NavLink>
      </Stack>
      <Row>
      {myBots.map((item) => (

      <Col md={6} xxl={4} className="p-3">
         <div className='border p-4 rounded-4'>
         <Stack
            direction="horizontal"
            className="align-items-center justify-content-between"
          >
            
                 
                  <h5>
                    {item.name}
                  </h5>
                
              
            <button className="btn btn-outline" type="button">
              ...
            </button>
          </Stack>
          <hr className="my-2" />
          <p className='small'>
            {item.description}
          </p>
          <Stack
            direction="horizontal"
            className="align-items-start justify-content-between"
          >
            <Stack>
              <ul className="p-0 ps-3 fs-6">
              {item.strategies.map((strategy) => (
                <li>{strategy.name} <span>{strategy.interval}</span></li>
              ))}
              </ul>
            </Stack>
            <Stack direction='horizontal'>
            <Stack direction="vertical" className='me-3'>
              <img
                src="https://cdn.cryptoprijzen.com/wp-content/uploads/binance-futures-review.png"
                alt=""
                width={100}
              />
              <img
                src="https://cdn.cryptoprijzen.com/wp-content/uploads/binance-futures-review.png"
                alt=""
                width={100}
              />
            </Stack>
            <Stack direction="vertical" className="text-end">
              <div dangerouslySetInnerHTML={{ __html: item.totalEntryPrice.toString().replace(/(\d*\.)/,'<span class="fs-3 fw-semibold">$</span><span class="fs-3 fw-semibold">$1</span>') }} ></div>
              <div>+1,3%</div>
            </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="horizontal"
            className="align-items-center justify-content-between"
          >
            <Stack direction="horizontal">
              <div className="border-end text-center fs-6 pe-3 lh-1">
                Selected
                <span className='fw-bold fs-3 d-block'>{item.assets.length}</span>
                Coins
              </div>
              <div className='ps-3'>
              {item.assets.map((asset) => (
               <img src={asset.image} width={25}/>
              ))}
              </div>
            </Stack>
            <button className={`btn btn-sm px-4 py-2  ${
                    item.isActive ? 'btn-active-emphasis' : 'btn-passive-emphasis'
                  }`} type="button">
              <span className={`rounded-circle p-1  me-2  ${
                    item.isActive ? 'bg-active-emphasis' : 'bg-passive-emphasis'
                  }`}></span>
              {item.isActive?"Active":"Passive"}
            </button>
          </Stack>
         </div>
        </Col>
  ))}
        


      </Row>
    </Fragment>
  )
}
