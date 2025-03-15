import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi' // ✅ Import icons

const Header = ({ onToggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <div className="header-container">
        {/* ✅ Logo */}
        <div>
          <h1>PRAVIN RAJ</h1>
        </div>

        {/* ✅ Hamburger Menu */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>

        {/* ✅ Navigation */}
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>HOME</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
          <a href="#skill" onClick={() => setIsMenuOpen(false)}>SKILLS</a>
          <a href="#project" onClick={() => setIsMenuOpen(false)}>PROJECTS</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
        </nav>

        {/* ✅ Dark Mode Button */}
        <div>
          <button className="theme-switch" onClick={onToggleDarkMode}>
            {/* Light Mode Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/>
            </svg>
            {/* Dark Mode Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
