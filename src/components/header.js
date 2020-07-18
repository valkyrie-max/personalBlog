import React from 'react';
import {Link} from 'gatsby'

import HeaderStyling from './componentStyling/header.module.scss'

const Header = () => {
  return (
    <>
    <nav>
        <ul className={HeaderStyling.linkContainer}>
          <li>
            <Link activeClassName={HeaderStyling.activeNavItem} to="/">Home</Link>
          </li>
          <li>
            <Link activeClassName={HeaderStyling.activeNavItem} to="/about">About me</Link>
          </li>
          <li>
            <Link activeClassName={HeaderStyling.activeNavItem} to="/blog">Blog</Link>
          </li>
          <li>
            <Link activeClassName={HeaderStyling.activeNavItem} to="/contact">Contact me</Link>
          </li>
        </ul>
      </nav>
    <header>
      
      <h1>
        <Link to="/">
          <span className="lineTop"></span>
            Alisa's Odd Journey
          <span className="lineBottom"></span>
          </Link>
      </h1>
    </header>
    </>
  )
}

export default Header