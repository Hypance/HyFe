import React, { Fragment, useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table, Pagination, Stack } from 'react-bootstrap'
import Graph from '../../components/AppGraph/AppGraph'
import { useFetchDashboardAssets } from '../../hooks/useFetchDashboardAssets'
import { useFetchTransactions } from '../../hooks/useFetchTransactions'
import icon from '../../images/icons/closed-eye.svg'
import Example from '../../components/AppGraph/AppGraph'
import { useFetchOpenTrades } from '../../hooks/useFetchOpenTrades'
import { tradeServiceOpenTrade } from '../../services/tradeService/interfaces'
import { Link } from 'react-router-dom'
import AssetsSlider from '../../components/AssetsSlider/AssetsSlider'

//Burayı düzelt api jsona profit ekle burayı sil
const DashboardGrap: any = [
    {
        "Id": 1,
        "Coin": {
            "Image": "https://raw.githubusercontent.com/balthazar/cryptoicons-cdn/master/images/BTC.png",
            "BaseAsset": "SOL",
            "QuoteAsset": "USDT",
            "Name": "Bitcoin"
        },
        "EntryPrice": 11911.48,
        "CurrentPrice": 11911.48,
        "Profit": 2.54,
        "Graph": [
            {
                "close": 23094.7,
                "date": 1675101719999
            },
            {
                "close": 23091.1,
                "date": 1675101779999
            },
            {
                "close": 23093.5,
                "date": 1675101839999
            },
            {
                "close": 23083.1,
                "date": 1675101899999
            },
            {
                "close": 23095.9,
                "date": 1675101959999
            },
            {
                "close": 23094.8,
                "date": 1675102019999
            },
            {
                "close": 23092.3,
                "date": 1675102079999
            },
            {
                "close": 23081.3,
                "date": 1675102139999
            },
            {
                "close": 23100,
                "date": 1675102199999
            },
            {
                "close": 23108.9,
                "date": 1675102259999
            },
            {
                "close": 23123.3,
                "date": 1675102319999
            },
            {
                "close": 23125.4,
                "date": 1675102379999
            },
            {
                "close": 23119.7,
                "date": 1675102439999
            },
            {
                "close": 23130.1,
                "date": 1675102499999
            },
            {
                "close": 23122.3,
                "date": 1675102559999
            },
            {
                "close": 23143.7,
                "date": 1675102619999
            },
            {
                "close": 23156.1,
                "date": 1675102679999
            },
            {
                "close": 23162.2,
                "date": 1675102739999
            },
            {
                "close": 23141.6,
                "date": 1675102799999
            },
            {
                "close": 23146.5,
                "date": 1675102859999
            },
            {
                "close": 23140.9,
                "date": 1675102919999
            },
            {
                "close": 23141.1,
                "date": 1675102979999
            },
            {
                "close": 23134.9,
                "date": 1675103039999
            },
            {
                "close": 23133.2,
                "date": 1675103099999
            },
            {
                "close": 23126.2,
                "date": 1675103159999
            },
            {
                "close": 23136.1,
                "date": 1675103219999
            },
            {
                "close": 23121.1,
                "date": 1675103279999
            },
            {
                "close": 23126.8,
                "date": 1675103339999
            },
            {
                "close": 23124.5,
                "date": 1675103399999
            },
            {
                "close": 23130,
                "date": 1675103459999
            },
            {
                "close": 23114.2,
                "date": 1675103519999
            },
            {
                "close": 23097.1,
                "date": 1675103579999
            },
            {
                "close": 23109,
                "date": 1675103639999
            },
            {
                "close": 23127.5,
                "date": 1675103699999
            },
            {
                "close": 23129.3,
                "date": 1675103759999
            },
            {
                "close": 23135.6,
                "date": 1675103819999
            },
            {
                "close": 23138.7,
                "date": 1675103879999
            },
            {
                "close": 23125.3,
                "date": 1675103939999
            },
            {
                "close": 23138.6,
                "date": 1675103999999
            },
            {
                "close": 23126.4,
                "date": 1675104059999
            },
            {
                "close": 23101.8,
                "date": 1675104119999
            },
            {
                "close": 23080.3,
                "date": 1675104179999
            },
            {
                "close": 23092,
                "date": 1675104239999
            },
            {
                "close": 23110.7,
                "date": 1675104299999
            },
            {
                "close": 23114.1,
                "date": 1675104359999
            },
            {
                "close": 23119.9,
                "date": 1675104419999
            },
            {
                "close": 23118.9,
                "date": 1675104479999
            },
            {
                "close": 23136.7,
                "date": 1675104539999
            },
            {
                "close": 23153.4,
                "date": 1675104599999
            },
            {
                "close": 23146.7,
                "date": 1675104659999
            }
        ]
    }
]

export const Dashboard: React.FC = () => {
    const myAssets = useFetchDashboardAssets()
    const transactions = useFetchTransactions()
    const [currentPage, setCurrentPage] = useState(0)
    const data = useFetchOpenTrades()
    const perPage = 10
    const pages: any = []
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
    const [openTrades, setOpenTrades] = useState<tradeServiceOpenTrade[]>(data)
    useEffect(() => {
        setOpenTrades(
            data.slice(currentPage * perPage, (currentPage + 1) * perPage)
        )
    }, [currentPage, data])

    return (
        <Fragment>

            <Container fluid>
                <h2 className='page-title'>My Assets </h2>
                <Row className='mt-4'>
                    <Col sm={7} className="">
                        <Row>
                            <Col sm={5}>
                                <div className='border p-4 rounded-4'>
                                    <h1 className='card-title'>$3,4210.99 <img className='ms-2' width={40} src={icon} alt="" /></h1>
                                    <p className='card-comment mt-2'>Total Assets Value</p>
                                </div>
                            </Col>
                            <Col sm={5}>
                                <div className='border p-4 rounded-4'>
                                    <h1 className='card-title'>$1,1210.29 <img className='ms-2' width={40} src={icon} alt="" /></h1>
                                    <p className='card-comment mt-2'>All Time Profit</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {myAssets.map((item) => (
                                <Col sm={3}>

                                    <div className='border p-4 rounded-4 mt-4'>
                                        <h4 className='card-title'>0.047 BTC</h4>
                                        <p className='card-comment mt-1'>$1.019.26</p>
                                        <Graph stock={item.Graph} color={'#09BD3C'} width={150} height={100}></Graph>
                                        <div className='d-flex mt-4 justify-content-center'>
                                            <img className='my-auto' height={40} src={item.Coin.Image} alt="" />
                                            <div >
                                                <p className='card-title ms-3 fw-semibold'>{item.Coin.Name}</p>
                                                <p className={`ms-3 ${item.Profit > 0 ? 'text-success' : 'text-danger'} fw-semibold`}>{DashboardGrap[0].Profit}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}

                        </Row>
                    </Col>
  const myAssets = useFetchDashboardAssets()
  const transactions = useFetchTransactions()
  const activePositions = useFetchActivePositions()

  console.log(activePositions)
  return (
    <Fragment>
      <Container fluid>
        <h2 className="page-title">My Assets </h2>
        <Row className="mt-4">
          <Col sm={7} className="">
           
              <AssetsSlider />
          
            {/* <Row>
              <Col sm={5}>
                <div className="border p-4 rounded-4">
                  <h1 className="card-title">
                    $3,4210.99{' '}
                    <img className="ms-2" width={40} src={icon} alt="" />
                  </h1>
                  <p className="card-comment mt-2">Total Assets Value</p>
                </div>
              </Col>
              <Col sm={5}>
                <div className="border p-4 rounded-4">
                  <h1 className="card-title">
                    $1,1210.29{' '}
                    <img className="ms-2" width={40} src={icon} alt="" />
                  </h1>
                  <p className="card-comment mt-2">All Time Profit</p>
                </div>
              </Col>
            </Row> */}
            <Row>
              {myAssets.map((item) => (
                <Col sm={4}>
                  <div className="border p-4 rounded-4 mt-4">
                    <h4 className="card-title">0.047 BTC</h4>
                    <p className="card-comment mt-1">$1.019.26</p>
                    <Graph
                      stock={item.Graph}
                      color={'#09BD3C'}
                      width={150}
                      height={100}
                    ></Graph>
                    <div className="d-flex mt-4 justify-content-center">
                      <img
                        className="my-auto"
                        height={40}
                        src={item.Coin.Image}
                        alt=""
                      />
                      <div>
                        <p className="card-title ms-3 fw-semibold">
                          {item.Coin.Name}
                        </p>
                        <p
                          className={`ms-3 ${
                            item.Profit > 0 ? 'text-success' : 'text-danger'
                          } fw-semibold`}
                        >
                          {DashboardGrap[0].Profit}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

                    {/* TRANSACTIONS CARD */}
                    <Col sm={5} >
                        <div className='border p-4 rounded-4 '>
                            <h2 className='page-title'>Transactions</h2>
                            <hr className='mt-2' />
                            <div className='transactions-card'>

                                {transactions.map((item) =>
                                (
                                    <div>
                                        <div className='mt-4 '>
                                            <div className='d-flex '>
                                                <img className='my-auto' height={40} src={item.coin.image} alt="" />
                                                <div className='ms-3'>
                                                    <p className='fw-semibold'>{`${item.orderSignal} ${item.coin.name}`}</p>
                                                    <p className='card-comment'>{item.date}</p>

                                                </div>
                                                <div className='ms-auto'>
                                                    <p className={`fw-semibold ${item.coin.value1 > 0 ? 'text-success' : 'text-danger'}`}>{item.coin.value1}</p>
                                                    <p className='float-end card-comment'>{item.coin.value2}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='mt-2' />

                                    </div>


                                ))}

                            </div>



                        </div>




                    </Col>
                </Row>
                
                <Stack
                    direction="horizontal"
                    className="align-items-center justify-content-between pb-5 pt-5"
                >
                    <h2>Open Trades</h2>
                    
                    <Link to="/trades" className=" btn btn-primary btn-md text-white">View All Open Trades</Link>
                </Stack>
                <Row className='mt-4'>
                    <Table hover size="sm" className="p-5">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Coin</th>
                                <th className="text-center">Entry Price</th>
                                <th className="text-center">Current Price</th>
                                <th className="text-center">Profit %</th>
                                <th className="text-center">Graph</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {openTrades.slice(0, 3).map((item) => {

                                return (

                                    <tr key={item.Id}>
                                        <td>{item.Id}</td>
                                        <td>
                                            <img width={25} src={item.Coin.Image} alt={item.Coin.Name} />{' '}
                                            <b>{item.Coin.BaseAsset}</b> {item.Coin.Name}
                                        </td>
                                        <td className="text-center">{item.EntryPrice}</td>
                                        <td className="text-center">{item.CurrentPrice}</td>
                                        <td
                                            className={`text-center ${item.Profit > 0 ? 'text-success' : 'text-danger'
                                                }`}
                                        >
                                            {' '}
                                            <b>{item.Profit}</b>{' '}
                                        </td>
                                        <td className="text-center cursor-none">
                                            <Example
                                                color={item.Profit > 0 ? '#09BD3C' : '#FD5353'}
                                                stock={item.Graph}
                                                width={150}
                                                height={36}
                                            />
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

                </Row>
            </Container>

        </Fragment >
    )
          {/* TRANSACTIONS CARD */}
          <Col sm={5}>
            <div className="border p-4 rounded-4 ">
              <h2 className="page-title">Transactions</h2>
              <hr className="mt-2" />
              <div className="transactions-card">
                {transactions.map((item) => (
                  <div>
                    <div className="mt-4 ">
                      <div className="d-flex ">
                        <img
                          className="my-auto"
                          height={40}
                          src={item.coin.image}
                          alt=""
                        />
                        <div className="ms-3">
                          <p className="fw-semibold">{`${item.orderSignal} ${item.coin.name}`}</p>
                          <p className="card-comment">{item.date}</p>
                        </div>
                        <div className="ms-auto">
                          <p
                            className={`fw-semibold ${
                              item.coin.value1 > 0
                                ? 'text-success'
                                : 'text-danger'
                            }`}
                          >
                            {item.coin.value1}
                          </p>
                          <p className="float-end card-comment">
                            {item.coin.value2}
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-2" />
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        <h2 className="page-title mt-4">Active Postions</h2>
        <Row className="mt-4">
          <Table hover size="sm" className="p-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th className="text-center">Last Price</th>
                <th className="text-center">24h Change</th>
                <th className="text-center">Market Cap</th>
                <th className="text-center">Volume (24h)</th>
                <th>Graph?</th>
              </tr>
            </thead>
          </Table>
        </Row>
      </Container>
    </Fragment>
  )
}
