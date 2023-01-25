
import {Alert } from 'react-bootstrap'

type AlertType =  'primary' | 'secondary' |'success' |'danger' |'warning' |'info' |'light' |'dark';
export default function AppAlert(title:string,message:string,type:AlertType) {
  return (
    <Alert variant={type}>
      <Alert.Heading>{title}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
}