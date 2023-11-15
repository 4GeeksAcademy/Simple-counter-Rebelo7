import React, { useState, useEffect } from 'react';

function SelectTimer() {
 const [counter, setCounter] = useState(0);
 const [targetTime, setTargetTime] = useState("10");

 useEffect(() => {
   const intervalId = setInterval(() => {
     setCounter(counter => counter + 1);
   }, 1000);

   return () => clearInterval(intervalId);
 }, [counter, targetTime]);

 useEffect(() => {
    if (counter === Number(targetTime)) {
      alert('Your time was reached!');
    }
   }, [counter, targetTime]);

 
 return (
   <div className='selectTimer'>
     <input  type="number" value={targetTime} onChange={e => setTargetTime(e.target.value)}   /> Set Timer
   </div>
 );
}

export {SelectTimer};