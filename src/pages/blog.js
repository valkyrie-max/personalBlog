import React from 'react';
import { graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            tags
                        }
                    }
                }
            }
        }
    `)

    console.log(data)

    return (
        <Layout>
            <h2>aoj: blog</h2>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h3>{edge.node.frontmatter.title}</h3>
                            <h4>{edge.node.frontmatter.tags}</h4>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage