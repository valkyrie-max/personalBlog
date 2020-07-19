import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout';

import {slugify} from '../util/utilityFunctions'

const TagPosts = ({data, pageContext}) => {
    const {tag} = pageContext;
    const {totalCount} = data.allMarkdownRemark;
    const pageHeader = `${totalCount} post ${totalCount === 1 ? '' : 's'} tagged with "${tag}".`

    return (
        <Layout>
            <p>{pageHeader}</p>
            {data.allMarkdownRemark.edges.map((edge) => (
                <Link to={`/blog/${edge.node.fields.slug}`}>
                    <h4>{edge.node.frontmatter.title}</h4>
                </Link>
            ))}
        </Layout>
    )
}

export const tagQuery = graphql`
    query($tag: String!) {
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: {tags: {in: [$tag]}}}
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date
                        tags
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`
export default TagPosts