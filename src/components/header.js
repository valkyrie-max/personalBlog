import React from 'react';
import {Link} from 'gatsby'

import HeaderStyling from './componentStyling/header.module.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={HeaderStyling.linkContainer}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>
        </ul>
      </nav>
      
      <h1>
        <Link to="/">Alisa's Odd Journey</Link>
      </h1>
    </header>
  )
}

export default Header