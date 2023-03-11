import React, { Fragment, useEffect} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Form, Button, Row, Col } from 'react-bootstrap'
import {  UserSettingsFormInputs } from './interface'
import { useFetchUserSettings } from '../../hooks/useFetchSettings'
import { userServiceUpdateUserSettings } from '../../services/userService/userService'


export const UserSettingsForm: React.FC<any> =  () => {
  const userSettings = useFetchUserSettings()
 
  const { register, handleSubmit,reset } = useForm<UserSettingsFormInputs>({
    mode: 'onBlur',
    defaultValues: userSettings
 
  })
  useEffect(() => {
    console.log(userSettings)
    if (userSettings) {
      reset(userSettings);
    }
  }, [userSettings]);
  const onSubmit: SubmitHandler<UserSettingsFormInputs> = async (data) => {
    const result = await userServiceUpdateUserSettings(data);
    if (result.status===201) {
      alert("İşlem Başarılı");
    }else{
      alert("İşlem Başarısız");
    }
  }
  
  return (
    <Fragment>
      
      <Form onSubmit={handleSubmit(onSubmit)} className="w-100 px-5">
        <h1 className="h3 mb-3">Settings</h1>
        <Row>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register('email', {
                  required: 'Please give a name to your Bot',
                })}
                type="text"
                readOnly
              />
              
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                {...register('phone')}
                type="tel"
                placeholder="Give your phone number"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                {...register('password', {
                  required: 'Please give your current password',
                })}
              >
                 
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                {...register('newPassword', {
                  required: 'Please enter a new password',
                })}
              >
                
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                {...register('confirmNewPassword', {
                  required: 'Please enter your new password again',
                })}
              >
                
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Telegram Token</Form.Label>
              <Form.Control
                {...register('telegramToken', {
                  
                  required: 'Please enter your telegram token',
                })}
                type="text"
                
              >
                
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Telegram Channel Id</Form.Label>
              <Form.Control
                {...register('telegramChannelId', {
                  required: 'Please enter your telegram channel id',
                })}
                type="number"
              >
               
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Save Settings
        </Button>
      </Form>
    </Fragment>
  )
}
