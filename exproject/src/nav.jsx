import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div>
      <Link to='/'>About</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}
