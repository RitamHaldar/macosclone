import React from 'react'
import "./navbar.scss"
import DateTime from './DateTime'
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="left">
        <img src="/navicons/apple.svg" alt="" />
        <h5>Ritam Haldar</h5>
        <h5>File</h5>
        <h5>Window</h5>
        <h5>Terminal</h5>
      </div>
      <div className="right">
        <img src="/navicons/wifi.svg" alt="" />
        <DateTime />
      </div>
    </header>
  )
}

export default Navbar