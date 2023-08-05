import React, { Fragment,useEffect,useState} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { CreateStrategyProps } from '../../pages/Strategy/interfaces'
import { StrategyFormInputs } from './interface'
import { strategyServiceCreateStrategy } from '../../services/strategyService/strategyService'
import { useFetchIntervals } from '../../hooks/useFetchInterval'
import { useFetchIndicators } from '../../hooks/useFetchIndicators'
import { useFetchOrderSignal } from '../../hooks/useFetchOrderSignal'
import { useFetchProvisions } from '../../hooks/useFetchInterval copy'
import { useFetchMyStrategy } from '../../hooks/useFetchMyStrategy'


interface StrategyFormProps extends CreateStrategyProps {
  isEdit: boolean;
  strategyId: any; 
}


export const StrategyForm: React.FC<StrategyFormProps> = ({isEdit,strategyId}) => {
  
  const myStrategy = useFetchMyStrategy(strategyId)
  // console.log(myStrategy.name);
  
  const { register, handleSubmit,setValue } = useForm<StrategyFormInputs>({
    
    mode: 'onBlur',
    
  })
  

  const [isCrossed,setIsCrossed] = useState(false)

  

  const intervals = useFetchIntervals();
  const indicators = useFetchIndicators();
  const orderSignal = useFetchOrderSignal();
  const provisions = useFetchProvisions();


  

  const onChangeIndicator = (e:any) => {
    const selectedIndicator:any = indicators.find(i=>i.value == e.target.value)
    setValue('period', selectedIndicator.period , { shouldTouch: true })
  } 

  const onChangeProvision = (e:any) => {
    const crossingIDs = [3,4]
    if (crossingIDs.find(i => i == e.target.value))
    setIsCrossed(true)
    else
    setIsCrossed(false)
    
    
  } 


  


  const onSubmit: SubmitHandler<StrategyFormInputs> = async (data) => {
    await strategyServiceCreateStrategy(data)
  }


  
    

  
  
// useEffect(() => {
//   Object.keys(myStrategy).forEach((key) => {
//     setValue(key, myStrategy[key]);
//   });

    // return () => { }
  // }, [myStrategy])
// console.log(myStrategy?.signals[0]?.indicator);

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)} className="w-100 px-5">
        <h1 className="h3 mb-3">{isEdit?"Edit Your Strategy":"Create Your Strategy"}</h1>
        <Row>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Strategy Name</Form.Label>
              <Form.Control
                {...register('name', {
                  required: 'Please give a name to your strategy',
                })}
                type="text"
                placeholder={"Give a name to your strategy"}
                defaultValue={myStrategy?.name}
                
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
                placeholder={"Give a name to your description"}
                defaultValue={myStrategy?.description}
              />
            </Form.Group>
          </Col>
        </Row>
        <h3>Signal Options</h3>
        <Row>
          <Col xs sm="6">
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Indicators</Form.Label>
              <Form.Select 
                {...register('indicator', {
                  required: 'Please choose an indicator',
                    onChange: (e) => onChangeIndicator(e),
                    
                }
                )}
              
              >
               {indicators.map((item) => (
                  <option key={ item.value} value={ item.value} selected={item.text == myStrategy?.signals[0].indicator}  >
                   
                    
                    { item.text}
                  </option>
                ))}
              </Form.Select>
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
                defaultValue={myStrategy?.signals[0].period}
              />
            </Form.Group>
          </Col>
          <Col xs sm="6">
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Provision</Form.Label>
              <Form.Select
                {...register('provision', {
                  required: 'Please choose an indicator',
                  onChange: (e) => onChangeProvision(e)
                })}
               
              >
               {provisions.map((item) => (
                  <option key={item.value} value={item.value} selected={item.text == myStrategy?.signals[0].rule}>
                    {item.text}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Value</Form.Label>
              <Form.Control
                {...register('value', {
                  required: 'Please give a number of value for your indicator',
                })}
                type="number"
                placeholder="Give a number of value for your indicator"
                defaultValue={myStrategy?.signals[0].value}
              />
        
            </Form.Group>
          </Col>
         {isCrossed &&
         <>
           <Col xs sm="6" >
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Crossing indicator</Form.Label>
              <Form.Select 
                {...register('crossingIndicator', {
                  required: 'Please choose an indicator',
                    
                })}
              >
               {indicators.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            
          </Col>
      
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Crossing Indicator Period</Form.Label>
              <Form.Control
                {...register('crossingIndicatorPeriod', {
                  required: 'Please give a number of period for your indicator',
                })}
                type="number"
                placeholder="Give a number of period for your indicator"
              />
            </Form.Group>
          </Col>

         
         </>}
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Interval</Form.Label>
              <Form.Select
                {...register('interval', {
                  required: 'Please choose an interval',
                })}
              >
                {intervals.map((item) => (
                  <option key={item.value} value={item.value} selected={item.text == myStrategy?.interval}>
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
               {orderSignal.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
        {isEdit?"Save Changes":"Create Strategy"}
        </Button>
      </Form>
    </Fragment>
  )
}
