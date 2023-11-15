import React, { useState, useEffect } from 'react';

function Counter() {
 const [counter, setCounter] = useState(0);
 const [inputValue, setInputValue] = useState('');
 const [countDown, setCountDown] = useState('');
 const [countDownActive, setCountDownActive ] = useState(false);

 useEffect(() => {
  const intervalId = setInterval(() => {
    setCounter(counter => counter + 1);
  }, 1000);

  return () => clearInterval(intervalId);
 }, []);

 useEffect(() => {
 if (countDownActive && countDown !== 0) {
   const intervalId = setInterval(() => {
     setCountDown(countDown => countDown - 1);
   }, 1000);

   return () => clearInterval(intervalId);
 }
}, [countDownActive, countDown]);

const handleInputChange = (event) => {
 setInputValue(event.target.value);
 setCountDown(Number(event.target.value));
 setCountDownActive(true);
};

const finalCounter = countDownActive ? String(countDown).padStart(6, '0') : String(counter).padStart(6, '0');

 return (
  <div className="counterDownContainer">
    <div className='counterDown'>
    {finalCounter}
    </div>
   <div className='countDownInput' >
    <input placeholder="Set Countdown" type="text" value={inputValue} onChange={handleInputChange} /> </div> 
  </div>
 );
}

export {Counter};