import React, { useState, useEffect } from 'react';

function Counter() {
 const [counter, setCounter] = useState(0);

 useEffect(() => {
   const intervalId = setInterval(() => {
     setCounter(counter => counter + 1);
   }, 1000);

   return () => clearInterval(intervalId);
 }, [counter]);

 const finalCounter = String(counter).padStart(6, '0');

 return (
   <div className='output'>
     {finalCounter}
   </div>
 );
}

export {Counter};