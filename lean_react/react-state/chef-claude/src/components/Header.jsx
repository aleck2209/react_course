import React from 'react'
import logo from '../assets/chef-claude-icon.png'

function Header() {
  return (
    <header className='header'>
        <img className='logo' src={logo} alt="chef" />
        <h1>Chef Claude</h1>
    </header>
  )
}

export default Header