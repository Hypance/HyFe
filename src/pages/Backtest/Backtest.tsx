import React, { Fragment, useState } from 'react'
import { Col, Row, Stack, Modal, Form, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFetchBacktest } from '../../hooks/useFetchBacktest'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch'
import { AppPathes } from '../../components/AppRouter/interfaces'
import {
  backtestServiceDeleteMyBacktest,
  backtestServiceUpdateBacktestStatus,
} from '../../services/backtestService/backtestService'

export const Backtest: React.FC = () => {
  const { backtests, fetchMoreData, hasMore, setBacktests } = useFetchBacktest()
  const [showModal, setShowModal] = useState(false)

  const handleModalClose = () => setShowModal(false)
  const handleModalShow = () => setShowModal(true)

  //Data PICKER
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const deleteBacktest = async (id: any) => {
    try {
      await backtestServiceDeleteMyBacktest(id)
      // Remove the bot from the state
      setBacktests(backtests.filter((backtest) => backtest.id !== id))
    } catch (error) {
      // Handle deletion error
      console.error('Failed to delete bot: ', error)
    }
  }

  const handleBacktestToggle = async (backtestId: any, newIsActive: any) => {
    try {
      await backtestServiceUpdateBacktestStatus(backtestId, newIsActive)

      const updatedBacktests = backtests.map((backtest) => {
        if (backtest.id === backtestId) {
          return { ...backtest, isActive: newIsActive }
        } else {
          return backtest
        }
      })

      setBacktests(updatedBacktests)
    } catch (error) {
      console.log('Failed to update backtest status: ', error)
    }
  }

  return (
    <Fragment>
      <Stack
        direction="horizontal"
        className="align-items-center justify-content-between pb-5"
      >
        <h1>Backtest</h1>
      </Stack>
      <InfiniteScroll
        dataLength={backtests.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Row>
          {backtests.map((item) => (
            <Col md={6} xxl={4} className="p-3">
              <div className="border p-4 rounded-4">
                <Stack
                  direction="horizontal"
                  className="align-items-center justify-content-between"
                >
                  <h5>
                    {item.name} {item.id}
                  </h5>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="primary"
                      id="dropdown-basic"
                      className="no-caret"
                    >
                      ...
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <ToggleSwitch
                        itemId={item.id}
                        isActive={item.isActive}
                        onToggle={(newIsActive) =>
                          handleBacktestToggle(item.id, newIsActive)
                        }
                        updateItemStatus={backtestServiceUpdateBacktestStatus}
                      />
                      <Dropdown.Item
                        as={Link}
                        to={`${AppPathes.BACKTESTDETAILS}/${item.id}`}                        
                      >
                        Backtest Detail
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => deleteBacktest(item.id)}>
                        Delete12
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Stack>
                <hr className="my-2" />
                <p className="small">{item.description}</p>
                <Stack
                  direction="horizontal"
                  className="align-items-start justify-content-between"
                >
                  <Stack>
                    <ul className="p-0 ps-3 fs-6">
                      {item.strategies.map((strategy) => (
                        <li>
                          {strategy.name} <span>{strategy.interval}</span>
                        </li>
                      ))}
                    </ul>
                  </Stack>
                  <Stack direction="horizontal">
                    <Stack direction="vertical" className="me-3">
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
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.totalEntryPrice
                            .toString()
                            .replace(
                              /(\d*\.)/,
                              '<span class="fs-3 fw-semibold">$</span><span class="fs-3 fw-semibold">$1</span>'
                            ),
                        }}
                      ></div>
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
                      <span className="fw-bold fs-3 d-block">
                        {item.assets.length}
                      </span>
                      Coins
                    </div>
                    <div className="ps-3">
                      {item.assets.map((asset) => (
                        <img src={asset.image} width={25} />
                      ))}
                    </div>
                  </Stack>
                  <button
                    className={`btn btn-sm px-4 py-2  ${
                      item.isActive
                        ? 'btn-active-emphasis'
                        : 'btn-passive-emphasis'
                    }`}
                    type="button"
                  >
                    <span
                      className={`rounded-circle p-1  me-2  ${
                        item.isActive
                          ? 'bg-active-emphasis'
                          : 'bg-passive-emphasis'
                      }`}
                    ></span>
                    {item.isActive ? 'Active' : 'Passive'}
                  </button>
                </Stack>
              </div>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>

      <Modal centered show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form style={{ width: 300 }}>
            <Form.Label>Start Date</Form.Label>
            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              isClearable
            />
            <Form.Label>End Date</Form.Label>
            <DatePicker
              selected={endDate}
              onChange={(date: any) => setEndDate(date)}
              isClearable
            />
            <div className="strategy-card-buttons d-flex justify-content-between mt-5">
              <button
                className="btn btn-sm px-5  py-2 btn-success"
                type="button"
              >
                Start
              </button>
              <button
                onClick={handleModalClose}
                className="btn btn-sm px-5  py-2 btn-danger"
                type="button"
              >
                Cancel
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}
