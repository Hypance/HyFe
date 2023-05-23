import React from 'react'

function BacktestPopup() {
  return (
    <div>BacktestPopup</div>
  )
}

export default BacktestPopup

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import {useForm, SubmitHandler} from 'react-hook-form'
// import Modal from 'react-bootstrap/Modal';

// import "react-datepicker/dist/react-datepicker.css";
// import { Button, Form } from "react-bootstrap";

// export const BacktestPopup:React.FC = (props) => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <>
//         <Button>
          
//         </Button>
        
//           <Modal
//             {...props}
//             show={show} 
            
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//           >
//             <Modal.Header closeButton>
//               <Modal.Title id="contained-modal-title-vcenter">
//                 Modal heading
//               </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <h4>Centered Modal</h4>
//               <p>
//                 Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//                 dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//                 consectetur ac, vestibulum at eros.
//               </p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button onClick={handleClose}>Close</Button>
//             </Modal.Footer>
//           </Modal>
              
    
//     </>

   
//   );

// }

// export const BacktestPopup = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
//   return (
//     <>
//         <Form style={{width:300}}>
//         <Form.Label>Start Date</Form.Label>
//         <DatePicker   selected={startDate} onChange={(date:any) => setStartDate(date)} isClearable />
//         <Form.Label>End Date</Form.Label>
//         <DatePicker   selected={endDate}  onChange={(date:any) => setEndDate(date)} isClearable/>
//         <div className='strategy-card-buttons d-flex justify-content-between mt-5'>               
//                 <button className="btn btn-sm px-5  py-2 btn-success" type="button">
//                   Start
//                 </button>
//                 <button className="btn btn-sm px-5  py-2 btn-danger" type="button">
//                   Cancel
//                 </button>
//               </div> 
//         </Form>

        
     
//     </>
   
//   )
// }
