import React from 'react'
import  './header.css'


const header = () => {
  return (
    <>
        <header>
  <div className="logo">
    <img src="img/devjane.png" alt="" />
  </div>
  <button className="nav-toggle" aria-label="toggle navigation">
    <span className="hamburger" />
  </button>
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <a href="#" className="nav__link">
          Home
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          About me
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          Projects
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          Contact Me
        </a>
      </li>
    </ul>
  </nav>
</header>
    </>
  )
}

export default header
