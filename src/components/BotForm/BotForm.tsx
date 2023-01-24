import React, { Fragment } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Form, Button, Row, Col } from 'react-bootstrap'
// import { CreateStrategyProps } from '../../pages/Strategy/interafeces'
// import { StrategyFormInputs } from './interface'
// import { stratgeyServiceCreateStratgey } from '../../services/strategyService/strategyService'
// import { useFetchIntervals } from '../../hooks/useFetchInterval'
import { BotFormInputs } from './interface'
import { CreateBotProps } from '../../pages/Bots/interfaces'
import { botServiceCreateBot } from '../../services/botService/botService'

export const BotForm: React.FC<CreateBotProps> = () => {
  const { register, handleSubmit } = useForm<BotFormInputs>({
    mode: 'onBlur',
  })

//   const intervals = useFetchIntervals();
  const onSubmit: SubmitHandler<BotFormInputs> = async (data) => {
    await botServiceCreateBot(data)
  }

  // useEffect(() => {

  //   return () => { }
  // }, [])

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)} className="w-100 px-5">
        <h1 className="h3 mb-3">Create Your Bot</h1>
        <Row>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Bot Name</Form.Label>
              <Form.Control
                {...register('name', {
                  required: 'Please give a name to your Bot',
                })}
                type="text"
                placeholder="Give a name to your Bot"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Bot Description</Form.Label>
              <Form.Control
                {...register('description')}
                type="text"
                placeholder="Give a name to your description"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Predefined Market</Form.Label>
              <Form.Select
                {...register('predefinedMarket', {
                  required: 'Please give a name to your signal',
                })}
              >
              <option>Select a Market</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price Strategy</Form.Label>
              <Form.Control
                {...register('priceStrategy', {
                  required: 'Please give a number of period for your indicator',
                })}
                type="number"
                placeholder="Select a Price Strategy"
              />
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Trade Type</Form.Label>
              <Form.Select
                {...register('tradeType', {
                  required: 'Please choose an indicator',
                })}
              >
                <option>Choose an Indicator</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Assets</Form.Label>
              <Form.Select
                {...register('assets', {
                  required: 'Please choose a alert value',
                })}
              >
                <option>Choose an Indicator</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Strategy</Form.Label>
              <Form.Select
                {...register('strategy', {
                  required: 'Please choose an interval',
                })}
              >
                {/* {intervals.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                ))} */}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Formation</Form.Label>
              <Form.Select
                {...register('formation', {
                  required: 'Please choose an order signal',
                })}
              >
                <option>Choose an Order Signal</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Create Bot
        </Button>
      </Form>
    </Fragment>
  )
}
