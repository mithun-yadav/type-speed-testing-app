import React, { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";

export default function Ui() {
  const [time, setTime] = useState({ minutes: "00", seconds: "00" });
  let [arrCheckIndex,setArrCheckIndex] = useState(0);
  let [typeValue,setTypeValue]= useState('');
  const [score,setScore] = useState(0);
  const [visible,setVisible] = useState(true);
  const typeString =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ipsa incidunt ab aperiam id! Architecto, accusamus!";
  const newArr = typeString.split(' ');

  function handleKeyDown(e) {
    // newTypeValue = typeValue.concat(`${e.target.value}`);
    
    if(e.key==" "){
      if(newArr[arrCheckIndex]===(typeValue.trim())){
        // setNewTypeValue('');
        //typeValue='';
        
        // console.log(newTypeValue);
        console.log(typeValue);
        // newTypeValue='';
        setArrCheckIndex(prevValue=> prevValue+1);
        console.log(arrCheckIndex);
        console.log(true);
        setTypeValue('');
        setScore(score+1);
        console.log(score);
      }
      else{
        setArrCheckIndex(prevValue=> prevValue+1);
        // setNewTypeValue('');
        // typeValue ='';
        console.log(typeValue);
        console.log(arrCheckIndex);
        console.log(false);
        setTypeValue('');
      }
    }
    else{
      // setTypeValue(typeValue+(`${e.target.value}`));
      setTypeValue(e.target.value);
    }
  };

  function handleChange(e){
    console.log(typeValue);
    setTypeValue(e.target.value);
  }
  function handleInterval(putMinutes){
    let timeCount = putMinutes;
    let initialTime = timeCount*60000;
    let seconds,minutes;
    let mit = setInterval(()=>{
      initialTime -=1000;
      seconds =(initialTime/1000)%60;
      minutes = Math.floor(initialTime/60000);
      if(minutes===0 && seconds===0){
        stopTimer(mit);
      }
      if(seconds<10){
        seconds = '0'+ seconds;
      }
      if(minutes<10){
        minutes = '0'+minutes;
      }
      setTime({minutes:minutes,seconds:seconds})
    },1000);
  }
  function stopTimer(mit){
    clearInterval(mit);
    setVisible(false);
    setTypeValue('');
  }
  function handleClick(e) {
    window.location.reload();
  }
  function handleFocus() {
    handleInterval(.25);
  }
  
  return (
    <div className="ui">
      <div className="content">{typeString}</div>
      <div className="inputDiv">
        <input
          type="text"
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          autoCorrect='off'
          onChange={handleChange}
          value = {typeValue}
          // style={{outline:visible?null:'none'}}
        ></input>
        <div className="time">
          {time.minutes}:{time.seconds}
        </div>
        <div className="refresh" onClick={handleClick}>
          <BiRefresh className='icon'/>
        </div>
      </div>
      <div><h2 style={{display:visible?'none':null,position:'relative',marginBottom:'2rem'}}>SCORE: {score} PER MINUTE</h2></div>
    </div>
  );
}
