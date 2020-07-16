import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <h1>Uh... There is nothing here?</h1>
    <p>This route doesn't exist. Come back to <Link to="/">home page?</Link></p>
  </Layout>
)

export default NotFoundPage
