import React, { Fragment } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import Graph from '../../components/AppGraph/AppGraph'
import { useFetchActivePositions } from '../../hooks/useFetchActivePositions'
import { useFetchDashboardAssets } from '../../hooks/useFetchDashboardAssets'
import { useFetchTransactions } from '../../hooks/useFetchTransactions'
import icon from '../../images/icons/closed-eye.svg'

export const Dashboard: React.FC = () => {
    const myAssets = useFetchDashboardAssets()
    const transactions = useFetchTransactions()
    const activePositions = useFetchActivePositions()
    console.log(activePositions)
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

            <h2 className='page-title mt-4' >Active Postions</h2>
            <Row className='mt-4'>
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

        </Fragment >
    )
}
