import './Timer.css'
import { useState, useEffect } from 'react';
import Work from "./Work"
import Break from "./Break"
import {Howl} from 'howler'


function Time(minutes) {
  const d = new Date();
  d.setMinutes(d.getMinutes() + minutes);
  return d;
}


function Timer({ workTime, breakTime, laps}) {
  
  const [minutes,setMinutes] = useState(workTime);
  const [seconds,setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isBreak, setIsBreak] = useState(false);
  const [currlaps, setcurrlaps] = useState(1);
  

  const alarm = () => {
    const sound = new Howl({
      src : 'https://assets.mixkit.co/sfx/preview/mixkit-classic-alarm-995.mp3',
      html5  :true,
      loop : false,
    })
    sound.play();
  }
  useEffect(() => {
    let interval = null;
    clearInterval(interval);

    if (isRunning && currlaps < 4){

    interval = setInterval(() => {

      if (seconds === 0) {

        if (minutes != 0){
          setMinutes(minutes - 1);
          setSeconds(59);
        }
        else {
          alarm();
          setcurrlaps(currlaps + 1);
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
    if (e.key === "p" || e.key === "P") {
      console.log(isRunning);
      if (isRunning === true) {
        setIsRunning(false);
      }
      else {
        setIsRunning(true);
      }
    }
  }

  console.log(Time(workTime));
  
  let timeText = `${minutes}:`;


  if (seconds < 10) {
    timeText += '0';
  }
  timeText += seconds;
  
  return (
    <>
    {isBreak && currlaps < laps ? (<Break timeText={timeText}/>) : (<Work timeText={timeText} currlaps={currlaps} laps={laps}/>)}
    </>
  )
}

export default Timer;
