import React, { useState, useEffect } from 'react';

function CountDown() {
 const [counter, setCounter] = useState(0);

 useEffect(() => {
   const intervalId = setInterval(() => {
     setCounter(counter => counter -1);
   }, 1000);

   return () => clearInterval(intervalId);
 }, [counter]);

 const finalCounter = String(counter).padStart(6, '0');

 return (
    <div className='countDown'>
        {finalCounter}
      <input type="number" value={targetTime} onChange={e => setTargetTime(e.target.value)}  />
    </div>
  );
 }

export {Counter};