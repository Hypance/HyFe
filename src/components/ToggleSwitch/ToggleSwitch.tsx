import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

// interface ToggleSwitchProps {
//     isActive: boolean;
//     onToggle: (newIsActive: boolean) => void;
// }

const ToggleSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.stopPropagation();
    setIsChecked(!isChecked);
  };


  const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsChecked(!isChecked);
  };

  return (
    <div onClick={handleDivClick} className='bg-danger'>
      <Form.Check 
        type="switch"       
        label={isChecked ? "Active" : "Passive"}
        checked={isChecked}
       
      />
    </div>
  );
};

export default ToggleSwitch;