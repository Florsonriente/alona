import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        // Function to calculate the countdown to Christmas
        const calculateCountdown = () => {
          const today = new Date();
          const christmas = new Date(today.getFullYear(), 11, 25); // December 25th
    
          // If today is past Christmas, set the countdown to next year's Christmas
          if (today > christmas) {
            christmas.setFullYear(christmas.getFullYear() + 1);
          }
    
          const timeDiff = christmas - today;
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
          setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        };
            // Calculate the countdown initially
    calculateCountdown();
     // Set up an interval to update the countdown every second
     const intervalId = setInterval(calculateCountdown, 1000);

     // Clean up the interval on component unmount
     return () => clearInterval(intervalId);
   }, []); // Empty dependency array means this effect runs once when the component mounts

   return (
    <div>
  <h3>{countdown} to</h3> 
      
    </div>
  );
};

export default Countdown;