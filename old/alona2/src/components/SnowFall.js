import React from 'react';
import { FaSnowflake, FaSun } from 'react-icons/fa'; 
import Button from './Button';


export default function SnowEffectButton({ showSnow, setShowSnow }) {
  const toggleSnow = () => {
    setShowSnow(prevState => !prevState); 
  };

  return (
    <div>
      <Button className="icon" onClick={toggleSnow} style={{ marginTop: '10px', display: 'flex', alignItems: 'center', backgroundColor:"transparent" }}>
        {showSnow ? <FaSun /> : <FaSnowflake/>} {/* Display icon based on showSnow */}
      </Button>
    </div>
  );
}
