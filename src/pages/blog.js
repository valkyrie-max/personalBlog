import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby'

import {slugify} from '../util/utilityFunctions'

import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark  (sort: { fields: [frontmatter___date], order: DESC }){
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString: "MMMM Do, YYYY")
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    console.log(data)

    return (
        <Layout>
            <h2>blog</h2>
            <ol className="postList">
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h3>{edge.node.frontmatter.title}</h3>
                            </Link>
                            <p className="postDate">{edge.node.frontmatter.date}</p>
                            <ul className="tagList">
                                {edge.node.frontmatter.tags.map((tag) =>{
                                    return (
                                        <li key ={`${tag}-tag`}>
                                            <Link to={`/tags/${slugify(tag)}/`}>{tag}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage