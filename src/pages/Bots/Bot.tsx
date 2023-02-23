import React, { Fragment } from 'react'
import { Col, Row, Stack } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export const Bot: React.FC = () => {
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
      <Col md={6} xxl={4} className="p-3">
         <div className='border p-4 rounded-4'>
         <Stack
            direction="horizontal"
            className="align-items-center justify-content-between"
          >
            <h5>RSI-EMA-MACD LONG BOT</h5>
            <button className="btn btn-outline" type="button">
              ...
            </button>
          </Stack>
          <hr className="my-2" />
          <p className='small'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </p>
          <Stack
            direction="horizontal"
            className="align-items-start justify-content-between"
          >
            <Stack>
              <ul className="p-0 ps-3 fs-6">
                <li>RSI 20 Above</li>
                <li>EMA 9 Cross Over</li>
                <li>EMA 40</li>
                <li>Up Trending</li>
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
              <div dangerouslySetInnerHTML={{ __html: "349.92".replace(/(\d*\.)/,'<span class="fs-3 fw-semibold">$</span><span class="fs-3 fw-semibold">$1</span>') }} ></div>
              <div>+1,3%</div>
              <div>30m</div>
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
                <span className='fw-bold fs-3 d-block'>135</span>
                Coins
              </div>
              <div className='ps-3'>
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
              </div>
            </Stack>
            <button className="btn btn-sm px-4 py-2 btn-success-emphasis" type="button">
              <span className='rounded-circle p-1 bg-success-emphasis me-2'></span>
              Active
            </button>
          </Stack>
         </div>
        </Col>

        <Col md={6} xxl={4} className="p-3">
         <div className='border p-4 rounded-4'>
         <Stack
            direction="horizontal"
            className="align-items-center justify-content-between"
          >
            <h5>RSI-EMA-MACD LONG BOT</h5>
            <button className="btn btn-outline" type="button">
              ...
            </button>
          </Stack>
          <hr className="my-2" />
          <p className='small'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </p>
          <Stack
            direction="horizontal"
            className="align-items-start justify-content-between"
          >
            <Stack>
              <ul className="p-0 ps-3 fs-6">
                <li>RSI 20 Above</li>
                <li>EMA 9 Cross Over</li>
                <li>EMA 40</li>
                <li>Up Trending</li>
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
              <div dangerouslySetInnerHTML={{ __html: "349.92".replace(/(\d*\.)/,'<span class="fs-3 fw-semibold">$</span><span class="fs-3 fw-semibold">$1</span>') }} ></div>
              <div>+1,3%</div>
              <div>30m</div>
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
                <span className='fw-bold fs-3 d-block'>135</span>
                Coins
              </div>
              <div className='ps-3'>
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
              </div>
            </Stack>
            <button className="btn btn-sm px-4 py-2 btn-success-emphasis" type="button">
              <span className='rounded-circle p-1 bg-success-emphasis me-2'></span>
              Active
            </button>
          </Stack>
         </div>
        </Col>

        <Col md={6} xxl={4} className="p-3">
         <div className='border p-4 rounded-4'>
         <Stack
            direction="horizontal"
            className="align-items-center justify-content-between"
          >
            <h5>RSI-EMA-MACD LONG BOT</h5>
            <button className="btn btn-outline" type="button">
              ...
            </button>
          </Stack>
          <hr className="my-2" />
          <p className='small'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </p>
          <Stack
            direction="horizontal"
            className="align-items-start justify-content-between"
          >
            <Stack>
              <ul className="p-0 ps-3 fs-6">
                <li>RSI 20 Above</li>
                <li>EMA 9 Cross Over</li>
                <li>EMA 40</li>
                <li>Up Trending</li>
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
              <div dangerouslySetInnerHTML={{ __html: "349.92".replace(/(\d*\.)/,'<span class="fs-3 fw-semibold">$</span><span class="fs-3 fw-semibold">$1</span>') }} ></div>
              <div>+1,3%</div>
              <div>30m</div>
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
                <span className='fw-bold fs-3 d-block'>135</span>
                Coins
              </div>
              <div className='ps-3'>
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
                <img
                  width={25}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY8E5F48EDxwFpx22rlAGciRoq52vl1TDoJwcMTO8yw&s"
                  alt=""
                />
              </div>
            </Stack>
            <button className="btn btn-sm px-4 py-2 btn-success-emphasis" type="button">
              <span className='rounded-circle p-1 bg-success-emphasis me-2'></span>
              Active
            </button>
          </Stack>
         </div>
        </Col>


      </Row>
    </Fragment>
  )
}
