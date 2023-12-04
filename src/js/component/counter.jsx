import React, { useState, useEffect } from 'react';

function Counter() {
 const [counter, setCounter] = useState(0);
 const [inputValue, setInputValue] = useState('');
 const [countDown, setCountDown] = useState('');
 const [countDownActive, setCountDownActive ] = useState(false);
 const [intervalId, setIntervalId] = useState(null);

 useEffect((startCountOnload) => {
 const id = setInterval(() => {
   setCounter(counter => counter + 1);
 }, 1000);

 setIntervalId(id);

 return () => clearInterval(id);
 }, []);

 useEffect(() => {
 if (countDownActive && countDown !== 0) {
   const id = setInterval(() => {
     setCountDown(countDown => countDown - 1);
   }, 1000);

   setIntervalId(id);

   return () => clearInterval(id);
 }
}, [countDownActive, countDown]);

const handleInputChange = (event) => {
 setInputValue(event.target.value);
 setCountDown(Number(event.target.value));
 setCountDownActive(true);
};

const handleStop = () => {
 clearInterval(intervalId);
 setIntervalId(null);
};

const handleResume = () => {
 if (intervalId === null) {
   const id = setInterval(() => {
     setCounter(counter => counter + 1);
   }, 1000);

   setIntervalId(id);
 }
};

const handleReset = () => {
 clearInterval(intervalId);
 setIntervalId(null);
 setCounter(0);
 
 
};

const finalCounter = countDownActive ? String(countDown).padStart(6, '0') : String(counter).padStart(6, '0');

 return (
 <div className="counterDownContainer">
   <div className='counterDown'>
     {finalCounter}
   </div>
   <div className='countDownInput'>
     <input placeholder="Set Countdown" type="text" value={inputValue} onChange={handleInputChange} />
   </div>
   <button onClick={handleStop}>Stop</button>
   <button onClick={handleResume}>Resume</button>
   <button onClick={handleReset}>Reset</button>
 </div>
 );
}

export {Counter};