import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

import {Helmet} from 'react-helmet'

import LayoutStyle from  './componentStyling/layout.module.scss'
import '../styles/setup.scss'
import '../styles/styles.scss'

const Layout = (props) => {
  return (
    <div className={LayoutStyle.container}>
      <Helmet title="Huh?">
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Rufina:wght@400;700&display=swap" rel="stylesheet" /> 
      </Helmet>
      <Header/>
        {props.children}
      <Footer/>
    </div>
  )
}

export default Layout
