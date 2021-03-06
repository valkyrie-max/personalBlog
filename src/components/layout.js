import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

import {Helmet} from 'react-helmet'

import LayoutStyle from  './componentStyling/layout.module.scss'
import '../styles/setup.scss'
import '../styles/styles.scss'
import '../styles/mq.scss'

const Layout = (props) => {
  return (
    <div className={LayoutStyle.container}>
      <Helmet title="AOJ: personal blog">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Playfair+Display+SC:wght@400;700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/82d522d35e.js" crossorigin="anonymous"></script> 
      </Helmet>
      <div className={LayoutStyle.content}>
        <Header/>
          {props.children}
      </div>
        <Footer/>
    </div>
  )
}

export default Layout
