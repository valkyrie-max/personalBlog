import React from 'react'
import {Link, graphql} from 'gatsby'
import {slugify} from '../util/utilityFunctions'
import Layout from '../components/layout'

import BlogTemplate from './templatesStyling/blogTemplate.module.scss'

export const query = graphql`
query ($slug: String!) {
    markdownRemark (
        fields: {slug: {eq: $slug}}) {
        frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            tags
        }
        html
    }
}
`

const Blog = (props) => {
    return (
        <Layout>
            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
            <p className={BlogTemplate.postDate}>{props.data.markdownRemark.frontmatter.date}</p>
            <ul className={BlogTemplate.tagList}>
                {props.data.markdownRemark.frontmatter.tags.map((tag) =>{
                    return (
                        <li key ={`${tag}-tag`}>
                            <Link to={`/tags/${slugify(tag)}/`}>{tag}</Link>
                        </li>
                    )
                })}
            </ul>

            <div className={BlogTemplate.postContainer} dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Blog; 