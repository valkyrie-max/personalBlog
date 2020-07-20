import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout';
import {slugify} from '../util/utilityFunctions'

import TagPostsStyles from './templatesStyling/tagPosts.module.scss'

const TagPosts = ({data, pageContext}) => {
    const {tag} = pageContext;
    const {totalCount} = data.allMarkdownRemark;
    const pageHeader = `${totalCount} post ${totalCount === 1 ? '' : 's'} tagged with "${tag}".`

    return (
        <Layout>
            <p className={TagPostsStyles.tagsHeader}>{pageHeader}</p>
            <ul className="postList">
                    {data.allMarkdownRemark.edges.map((edge) => (
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
                    ))}
            </ul>
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