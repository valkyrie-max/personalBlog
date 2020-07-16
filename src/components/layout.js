import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

import LayoutStyle from  './componentStyling/layout.module.scss'
import '../styles/setup.scss'
import '../styles/styles.scss'

const Layout = (props) => {
  return (
    <div className={LayoutStyle.container}>
      <Header/>
        {props.children}
      <Footer/>
    </div>
  )
}

export default Layout
