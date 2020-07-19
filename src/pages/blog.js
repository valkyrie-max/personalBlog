import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby'
import {kebabCase} from 'lodash';

import {slugify} from '../util/utilityFunctions'

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