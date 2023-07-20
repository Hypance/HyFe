import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

interface ToggleSwitchProps {
    itemId: number;
    isActive: boolean;
    onToggle: (newIsActive: boolean) => void;
    updateItemStatus: (id: number, status: boolean) => Promise<any>;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ itemId, isActive, onToggle, updateItemStatus }) => {
  const [isChecked, setIsChecked] = useState(isActive);

  useEffect(() => {
    setIsChecked(isActive);
  }, [isActive]);

  const handleDivClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsChecked(!isChecked);

    try {
      const response = await updateItemStatus(itemId, !isChecked);
      if (response.data && response.data.isActive !== isChecked) {
        onToggle(response.data.isActive);
      }
    } catch (error) {
      console.error('Failed to update item status', error);
    }
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