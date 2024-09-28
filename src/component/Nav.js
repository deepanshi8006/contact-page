import React from 'react'
import '../App.css'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src="/images/logo.jpeg" alt="logo" />
        <h2><i>LOGO</i></h2>
      </div>
      <div className='navigation'>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav