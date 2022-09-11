//import { useTimer } from 'react-timer-hook'
//import { CircularProgressbar } from 'react-circular-progressbar'
//import 'react-circular-progressbar/dist/styles.css';
import './Timer.css'
import { useState, useEffect, useRef, Fragment } from 'react';
import Work from "./Work"
import Break from "./Break"


function Time(minutes) {
  const d = new Date();
  d.setMinutes(d.getMinutes() + minutes);
  return d;
}


function Timer({ workTime, breakTime, setIsSettings}) {
  
  const [minutes,setMinutes] = useState(workTime);
  const [seconds,setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isBreak, setIsBreak] = useState(false);
  const [laps, setLaps] = useState(1);

  useEffect(() => {
    let interval = null;
    clearInterval(interval);

    if (isRunning && laps < 4){

    interval = setInterval(() => {

      if (seconds === 0) {

        if (minutes != 0){
          setMinutes(minutes - 1);
          setSeconds(59);
        }
        else {
          setLaps(laps + 1);
          setSeconds(0);
          
          setIsRunning(true);

          if (!isBreak) {
            setMinutes(breakTime);
            setIsBreak(true);
          }
          else {
            setMinutes(workTime);
            setIsBreak(false);
          }
          
        }
      }
      else {
        setSeconds(seconds - 1);
      }
    },1000);
  }
    return () => clearInterval(interval);
  },[minutes,seconds,isRunning]);


  useEffect(() => {
    document.addEventListener('keydown',TimerHandle)
  })
  
  const TimerHandle = (e) => {
    if (e.key === " ") {
      console.log(isRunning);
      if (isRunning === true) {
        setIsRunning(false);
      }
      else {
        setIsRunning(true);
      }
      // setPaused(!paused);
    }
  }

  console.log(Time(workTime));
  let percentage = ((minutes*60 + seconds)/(workTime*60)) * 100;
  
  let timeText = `${minutes}:`;

  console.log(minutes,seconds);

  if (seconds < 10) {
    timeText += '0';
  }
  timeText += seconds;
  
  return (
    <>
    {isBreak && laps < 4 ? (<Break timeText={timeText}/>) : (<Work timeText={timeText} laps={laps}/>)}
    </>
  )
}

export default Timer;
