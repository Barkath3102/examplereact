import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Sum() {
  return (
    <div>
      <h1>Summary</h1>
      <Link to='value1'>content 1</Link>
      <Link to='value2'>content 2</Link>
      <Outlet></Outlet>
    </div>
  )
}
