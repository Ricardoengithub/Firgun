/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/doc.js")
    const tagTemplate = path.resolve("src/templates/tags.js")
    const subtagsTemplate = path.resolve("src/templates/subtags.js")
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          query {
            allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                  }
                }
              }
            }
            tagsGroup: allMdx(limit: 2000) {
                group(field: frontmatter___tags) {
                  fieldValue
                }
            }
            subtagsGroup: allMdx{
              edges{
                node{
                  frontmatter{
                    tags
                    subtag
                  }
                }
              }
            } 
          }
        `
      ).then((result) => {
        const posts = result.data.allMdx.edges

        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              // prev: index === 0 ? null : posts[index - 1].node,
              // next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          })
          resolve()
        })

        // Extract tag data from query
        const tags = result.data.tagsGroup.group
        // Make tag pages
        tags.forEach((tag) => {
          createPage({
            path: `/${_.kebabCase(tag.fieldValue)}/`,
            component: tagTemplate,
            context: {
              tag: tag.fieldValue,
            },
          })
        })

        const subtags = result.data.subtagsGroup.edges

        subtags.forEach(({ node }, index) => {
          const path = "/" + node.frontmatter.tags + "/" + node.frontmatter.subtag
          createPage({
            path,
            component: subtagsTemplate,
            context: {
              subtag: node.frontmatter.subtag,
              tag: node.frontmatter.tags,
              pathSlug: path,
              // prev: index === 0 ? null : posts[index - 1].node,
              // next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          })
          resolve()
        })
        
      })
    )
  })
}
