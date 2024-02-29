import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Useeffect() {
  useEffect(()=>{
    console.log("component did mount");
    return()=>{
      console.log("component will unmount");
    }
  })
  const [state , setstate] = useState(0)
  const incre = ()=>{
      setstate(state+1)
  
    } 
    console.log("render");
    return (
  <div>
      <h1>{state}</h1>
      <button onClick={()=> incre()}>increase</button>
    </div>
  )
}

