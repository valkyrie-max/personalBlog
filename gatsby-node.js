const path = require(`path`);
const _ = require(`lodash`);
const { create } = require("lodash");
const { slugify } = require("./src/util/utilityFunctions");

module.exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions; 

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;

    const blogTemplate = path.resolve(`./src/templates/blog.js`);
    const tagTemplate = path.resolve(`./src/templates/tags.js`)
    const tagPosts = path.resolve(`./src/templates/tagPosts.js`)

    const response = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                        }
                    }
                }
            }
        }
    `)

    const posts = response.data.allMarkdownRemark.edges
    posts.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

    let tags = [];
    _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
        }
    })
    
    tags = _.uniq(tags)

    createPage({ 
        path: `/tags`,
        component: tagTemplate,
        context: {
            tags
        }
    })

    tags.forEach(tag => (
        createPage({
            path: `/tags/${slugify(tag)}`,
            component: tagPosts,
            context: {
                tag
            }
        })
    ))
}