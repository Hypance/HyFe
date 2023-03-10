import React, { Fragment } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { CreateStrategyProps } from '../../pages/Strategy/interafeces'
import { StrategyFormInputs } from './interface'
import { stratgeyServiceCreateStratgey } from '../../services/strategyService/strategyService'
import { useFetchIntervals } from '../../hooks/useFetchInterval'

export const StrategyForm: React.FC<CreateStrategyProps> = () => {
  const { register, handleSubmit } = useForm<StrategyFormInputs>({
    mode: 'onBlur',
  })

  const intervals = useFetchIntervals();
  const onSubmit: SubmitHandler<StrategyFormInputs> = async (data) => {
    await stratgeyServiceCreateStratgey(data)
  }

  // useEffect(() => {

  //   return () => { }
  // }, [])

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)} className="w-100 px-5">
        <h1 className="h3 mb-3">Create Your Strategy</h1>
        <Row>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Strategy Name</Form.Label>
              <Form.Control
                {...register('name', {
                  required: 'Please give a name to your strategy',
                })}
                type="text"
                placeholder="Give a name to your strategy"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Strategy Description</Form.Label>
              <Form.Control
                {...register('description')}
                type="text"
                placeholder="Give a name to your description"
              />
            </Form.Group>
          </Col>
        </Row>
        <h3>Signal Options</h3>
        <Row>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Signal Name</Form.Label>
              <Form.Control
                {...register('signalName', {
                  required: 'Please give a name to your signal',
                })}
                type="text"
                placeholder="Give a name to your signal"
              />
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Period</Form.Label>
              <Form.Control
                {...register('period', {
                  required: 'Please give a number of period for your indicator',
                })}
                type="number"
                placeholder="Give a number of period for your indicator"
              />
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Indicators</Form.Label>
              <Form.Select
                {...register('indicator', {
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
              <Form.Label>Value</Form.Label>
              <Form.Select
                {...register('value', {
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
              <Form.Label>Interval</Form.Label>
              <Form.Select
                {...register('interval', {
                  required: 'Please choose an interval',
                })}
              >
                {intervals.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Order Signal</Form.Label>
              <Form.Select
                {...register('orderSignal', {
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
          Create Strategy
        </Button>
      </Form>
    </Fragment>
  )
}
