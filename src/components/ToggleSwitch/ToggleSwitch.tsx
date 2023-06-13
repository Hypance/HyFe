import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { botServiceUpdateBotStatus } from '../../services/botService/botService';


interface ToggleSwitchProps {
    botId: number;
    isActive: boolean;
    onToggle: (newIsActive: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ botId, isActive, onToggle }) => {
  const [isChecked, setIsChecked] = useState(isActive);

  useEffect(() => {
    setIsChecked(isActive);
  }, [isActive]);

  const handleDivClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsChecked(!isChecked);

    try {
      const response = await botServiceUpdateBotStatus(botId, !isChecked);
      if (response.data && response.data.isActive !== isChecked) {
        onToggle(response.data.isActive);
      }
    } catch (error) {
      console.error('Failed to update bot status', error);
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