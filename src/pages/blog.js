import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby'

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
            <h2>aoj: blog</h2>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h3>{edge.node.fields.slug}</h3>
                            </Link>
                            <p>{edge.node.frontmatter.date}</p>
                            <h4>{edge.node.frontmatter.tags}</h4>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage