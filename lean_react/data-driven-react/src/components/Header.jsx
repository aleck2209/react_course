import React from 'react'
import globe from "../assets/globe.png"

function Header() {
  return (
    <header className='header'>
        <img className='logo' src={globe} alt="globe terrestre" />
        <h1>my travel journal.</h1>
    </header>
  )
}

export default Header