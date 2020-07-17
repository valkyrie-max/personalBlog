import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className="description">
      <p>The name of this website is a parody of manga and anime series "JoJo's Bizarre Adventure". This is essentially a personal blog where I talk about random stuff. It includes (but not limited to): Japanese culture and language, everyday life, coding, and so on.</p>

      <p>If you would like to learn more about the creator of this blog, please go to the "About Me" section or click <Link to="/about">here</Link>.</p>
      <p>I also like to document my experiences, thoughts, and learning processes. You can click "Blog" to get to it or click <Link to="/blog">here</Link> for faster access.</p>
      <p>Would you like to collaborate? Perhaps leave some feedback? Talk about random things? You can reach out to me by going to the "Contact Me" section or click, you guessed it, <Link to="/contact">here</Link>.</p>
    </div>
  </Layout>
)

export default IndexPage
