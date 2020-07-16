import React from 'react';
import {Link} from 'gatsby'

import HeaderStyling from './componentStyling/header.module.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className={HeaderStyling.link}>
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
      
      <h1>Alisa's Odd Journey</h1>
      <h2>AOJ for short.</h2>

    </header>
  )
}

export default Header