import React from 'react';
import {Link} from 'gatsby'

const Header = () => {
  return (
    <header>
      <h1>Alisa's Odd Journey</h1>
      <h2>AOJ for short.</h2>

      <nav>
        <ul>
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
    </header>
  )
}

export default Header