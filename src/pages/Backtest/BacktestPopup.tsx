import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {useForm, SubmitHandler} from 'react-hook-form'

import "react-datepicker/dist/react-datepicker.css";
import { Form, Stack } from "react-bootstrap";

export const BacktestPopup = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
  return (
    <>
        <Form style={{width:300}}>
        <Form.Label>Start Date</Form.Label>
        <DatePicker   selected={startDate} onChange={(date:any) => setStartDate(date)} isClearable />
        <Form.Label>End Date</Form.Label>
        <DatePicker   selected={endDate}  onChange={(date:any) => setEndDate(date)} isClearable/>
        <div className='strategy-card-buttons d-flex justify-content-between mt-5'>               
                <button className="btn btn-sm px-5  py-2 btn-success" type="button">
                  Start
                </button>
                <button className="btn btn-sm px-5  py-2 btn-danger" type="button">
                  Cancel
                </button>
              </div> 
        </Form>

        
     
    </>
   
  )
}
