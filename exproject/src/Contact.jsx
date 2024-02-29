import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navPath = useNavigate()
  return (
    <div>
      <h1>contact</h1>
      <button onClick={()=>navPath('/summary')}> Move To Summary </button>

    </div>
  )
}
