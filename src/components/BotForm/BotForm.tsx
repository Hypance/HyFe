import React, { Fragment, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { BotFormInputs } from './interface'
import { CreateBotProps } from '../../pages/Bots/interfaces'
import { botServiceCreateBot } from '../../services/botService/botService'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useFetchMarkets } from '../../hooks/useFetchMarket'
import { useFetchOrderType } from '../../hooks/useFetchOrderType'
import { useFetchStrategy } from '../../hooks/useFetchStrategy'
import { useFetchAssets } from '../../hooks/useFetchAssets'
import {useFetchFormation } from '../../hooks/useFetchFormation'
import {useFetchTrendStrategy } from '../../hooks/useFetchTrendStrategy'
import {useFetchPriceStrategy } from '../../hooks/useFetchPriceStrategy'
import { useFetchMyBot } from '../../hooks/useFetchMyBot'

interface BotFormProps extends CreateBotProps {
  isEdit: boolean;
  botId: any; 
}

export const BotForm: React.FC<BotFormProps> = ({isEdit,botId}) => {

  const myBot = useFetchMyBot(botId)
  
  const { register, handleSubmit } = useForm<BotFormInputs>({
    mode: 'onBlur',
  })
  const markets = useFetchMarkets();
  const orderType = useFetchOrderType();
  const strategy = useFetchStrategy();
  const trendStrategy = useFetchTrendStrategy();
  const assets = useFetchAssets();
  const formation = useFetchFormation();
  const priceStrategy = useFetchPriceStrategy();
  

  const onSubmit: SubmitHandler<BotFormInputs> = async (data) => {
    const result = await botServiceCreateBot(data);
    if (result.status===201) {
      alert("İşlem Başarılı");
    }else{
      alert("İşlem Başarısız");
    }
  }
  // useEffect(() => {

  //   return () => { }
  // }, [])


  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '25%', value: '1' },
    { name: '50%', value: '2' },
    { name: '75%', value: '3' },
    { name: '100%', value: '4' },
  ];

  return (
    <Fragment>
      
      <Form onSubmit={handleSubmit(onSubmit)} className="w-100 px-5">
      <h1 className="h3 mb-3">{isEdit?"Edit Your Bot":"Create Your Bot"}</h1>
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
                defaultValue={myBot?.name}
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
                defaultValue={myBot?.description}
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
                 {markets.map((item,index) => (
                  <option key={index} value={item.value} selected={item.value == myBot?.predefinedMarket}>
                    {item.text}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price Strategy</Form.Label>
              <Form.Select
                {...register('priceStrategy', {
                  required: 'Please give a name to your signal',
                })}
              >
                 {priceStrategy.map((item) => ( 
                  <option key={item.value} value={item.value} selected={item.value == myBot?.priceStrategy}>
                    {item.text}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Assets</Form.Label>
              <Form.Select multiple
                {...register('assets', {
                  required: 'Please choose a alert value',
                })}
              >
                {assets.map((item) => (
                  <option key={item.value} value={item.value} selected={myBot?.assets.includes(item.value)} >
                    {item.name}
                  </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Strategy</Form.Label>
              <Form.Select multiple
                {...register('strategy', {
                  required: 'Please choose an interval',
                })}
              >
                {strategy.map((item) => (
                  <option key={item.value} value={item.value} selected={myBot?.strategy.includes(item.value)}>
                    {item.name}
                  </option>
                  ))}
              </Form.Select>
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
                {orderType.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Formation</Form.Label>
              <Form.Select
                {...register('formation')}>
                 <option value="">Choose a Formation</option>
                 {formation.map((item) => (
                <option key={item.value} value={item.value}>
                    {item.name}
                  </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Trend Strategy</Form.Label>
              <Form.Select
                {...register('trendStrategy', {
                  required: 'Please choose an interval',
                })}
              >
              {trendStrategy.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.text} {item.value}
                  </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price Volume</Form.Label>
              <br />
              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={'outline-primary'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
        {isEdit?"Save Changes":"Create Bot"}
        </Button>
      </Form>
    </Fragment>
  )
}

