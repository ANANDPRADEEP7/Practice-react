      1. map

function App(){
  const arr=[{id:1,name:"anand"},{id:2,name:"virat"}];

  return(
    <div>
      {arr.map(item=><p key={item.id}>{item.name}</p>)}
    </div>
  )
}
export default App; 	


     2. Parent to Child

// ParentComponent.jsx

import ChildComponent from './ChildComponent';

function ParentComponent() {
  const name = "Anandh";
  return <ChildComponent userName={name} />;
}

export default ParentComponent;

// ChildComponent.jsx 

function ChildComponent({ userName }) {
  return <h1>Hello, {userName}!</h1>;
}

export default ChildComponent;

   

  3. Child to Parent

// ParentComponent.jsx
import { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <ChildComponent sendMessage={handleMessage} />
      <p>Message from child: {message}</p>
    </>
  );
}

export default ParentComponent;


// ChildComponent.jsx
function ChildComponent({ sendMessage }) {
  return (
    <button onClick={() => sendMessage("Hello from child!")}>
      Send Message
    </button>
  );
}

export default ChildComponent;





   4.component


import { useState } from "react"

function ComponentA(){

  const [count,setCount] = useState(0)

    return(<div>
      <button onClick={()=>setCount(count+1)}> Count:{count}</button>
    </div>

    )
}
export default ComponentA

    5.sum



import React,{use, useState} from "react";

function App(){
  const [a,seta]=useState(0)
  const [b,setb]=useState(0)
  const [sum,setSum]=useState(0)

  const addNumber=()=>{
    setSum(Number(a)+Number(b));
  };
  return(
    <div>
      <h2> Add Two Number</h2>
      <input onChange={e=>seta(+e.target.value)}/>
      <input onChange={e=>setb(+e.target.value)} />
      <button onClick={addNumber}>Add</button>
      <p>result:{sum}</p>
    </div>
  )
}
export default App;


	6.useref


import React,{useRef} from "react";

function App(){
    const myref=useRef(null);

    return(
      <div>
        <h1 ref={myref}> hello i am using useRef</h1>
      </div>
    )
}
export default App;


	7.useeffect


import React, { useEffect, useState } from 'react'

function UseEffectHook() {

    const [count,setCount]=useState(0)
useEffect(()=>{
    console.log('component mounted')

    return()=>{
        console.log('component unmounted')
    }
},[count])


  return (
    <div>
        <h2>useEffect example</h2>
        <p>COUNT:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseEffectHook


		8:counter


import React,{useState} from "react";

function Counter(){

  const [count,setCount]=useState(0)

  const increment=()=>{
    setCount(count +1)
  }

  const decrement=()=>{
    setCount(count -1)
  }

  const reset=()=>{
    setCount(0);
  }

  return(<div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>Decrement</button>
      <button className="counter-button" onClick={reset}>Reset</button>
      <button className="counter-button" onClick={increment}>Increment</button>
  </div>);
}
export default Counter;



9:

import React,{useState} from "react"
function App(){
const [name,setname]=useState("")

const handleChangename=(event)=>{
  setname(event.target.value)
}
return(
  <div>
    <input value={name} onChange={handleChangename} />
    <p>name:{name}</p>
    
  </div>
)
}
export default App


10:

import { useState } from "react"

function App(){
const [food,setfood]=useState("")
const handlefood=(event)=>{
  setfood(event.target.value)
}
return(
  <div>
  <select value={food} onChange={handlefood}>
  <option value="">select option</option>
  <option value="cake">Cake</option>
  <option value="bisket">bisket</option>
  <option value="momo">momo</option>
  </select>
  <p>food:{food}</p>

  </div>
)
}
export default App

11: timmer set

import React,{useState,useEffect,useRef} from "react"
function StopWatch(){
    const [isRunning,setIsRunning]=useState(false)
    const [elapsedTime,setElapsedtime]=useState(0)
    const intervellref=useRef(null)
    const startTimeRef=useRef(0);

    useEffect(()=>{
        if(isRunning){
          intervellref.current=setInterval(()=>{
            setElapsedtime(Date.now()-startTimeRef.current)
          },10)
        }
        return()=>{
          clearInterval(intervellref.current)
        }
    },[isRunning])
    
    function start(){
        setIsRunning(true)
        startTimeRef.current=Date.now()-elapsedTime;

    }
    function stop(){
          setIsRunning(false)
    }
    function rest(){
        setElapsedtime(0)
        setIsRunning(false)
    }
    function fromattime(){

      const minites=Math.floor(elapsedTime/(1000*60)%60);
      const seconds=Math.floor(elapsedTime/(1000)%60);
      const milsec=Math.floor((elapsedTime%1000)/10);

          return `${minites}:${seconds}:${milsec}`
    }
    return(
      <div>
        <div>{fromattime()}</div>
        <div>
          <button onClick={start}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={rest}>Rest</button>
        </div>
      </div>
    )
}
export default StopWatch


12: color switch

import React,{useState} from "react"

function SwitchColor(){
  const [color,setColor]=useState('white')

  return(
    <div style={{padding:'20px'}}>
      <div
      style={{
        width:'200px',
        height:'100px',
        backgroundColor:color
      }}
      ></div>
      <button onClick={()=>setColor('red')}>Red</button>
      <button onClick={()=>setColor('yellow')}>yellow</button>
      <button onClick={()=>setColor('black')}>balck</button>
    </div>
  )
}
export default SwitchColor

