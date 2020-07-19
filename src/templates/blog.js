import React from 'react'
import {Link, graphql} from 'gatsby'
import {slugify} from '../util/utilityFunctions'
import Layout from '../components/layout'

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
            <p className="postDate">{props.data.markdownRemark.frontmatter.date}</p>
            <ul className="tagList">
                {props.data.markdownRemark.frontmatter.tags.map((tag) =>{
                    return (
                        <li key ={`${tag}-tag`}>
                            <Link to={`/tags/${slugify(tag)}/`}>{tag}</Link>
                        </li>
                    )
                })}
            </ul>

            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Blog; 