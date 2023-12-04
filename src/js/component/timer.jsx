import React, { useState, useEffect } from 'react';

function SelectTimer() {
 const [counter, setCounter] = useState(0);
 const [countDown, setCountDown] = useState('');
 const [countDownActive, setCountDownActive ] = useState(false);
 const [intervalId, setIntervalId] = useState(null);
 const [targetTime, setTargetTime] = useState("10");

 useEffect(() => {
 const id = setInterval(() => {
  setCounter(counter => counter + 1);
 }, 1000);

 setIntervalId(id);

 return () => clearInterval(id);
 }, []);

 useEffect(() => {
  if (countDownActive && Number(countDown) !== 0) {
  const id = setInterval(() => {
    setCountDown(countDown => countDown - 1);
  }, 1000);
 
  setIntervalId(id);
 
  return () => clearInterval(id);
  }
 }, [countDownActive, countDown]);

 useEffect(() => {
 if (counter  === Number(targetTime)) {
  alert('Your time was reached!');
 }
}, [counter, targetTime]);

useEffect(() => {
  if (countDown === Number(targetTime)) {
  alert('Your time was reached!');
  }
 }, [countDown, countDown]);

 return (
 <div className='selectTimer'>
  <input type="number" value={targetTime} onChange={e => setTargetTime(e.target.value)} /> Set Timer
 </div>
 );
}

export {SelectTimer};