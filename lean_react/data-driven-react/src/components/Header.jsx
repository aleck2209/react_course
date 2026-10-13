import React from 'react'
import globe from "../assets/globe.png"

function Header() {
  return (
    <header className='header'>
        <img className='logo' src={globe} alt="globe terrestre" />
        <span>my travel journal.</span>
    </header>
  )
}

export default Header