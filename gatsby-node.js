const path = require(`path`);
const _ = require(`lodash`)

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

    response.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })


    response.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: tagTemplate,
            path: `/tags/${edge.node.frontmatter.tags.forEach((tag, i) => {
                if (i < edge.node.frontmatter.tags) {
                    return `${tag[i]}`
                } else {
                    return null
                }
            })}`,
            context: {
                tag: edge.node.frontmatter.tags
            }
        })
    })
}