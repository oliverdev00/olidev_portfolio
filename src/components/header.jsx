import React from 'react'
import styled from 'styled-components';

export const Header = styled.header `
  background-color: aliceblue;
`

const header = () => {
  return (
    
  <Header>
          <div className="logo">
            <img src='https://i.imgur.com/epDCNXb.png' alt='logo'/>
          </div>
          <button className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger" />
          </button>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="navlink">

            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="navlink">
              About me fgf
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="navlink">
              Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="navlink">
              Contact Me
        </a>
      </li>
    </ul>
  </nav>
</Header>
  )
}

export default Header
