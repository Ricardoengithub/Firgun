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
    //const tagTemplate = path.resolve("src/templates/tags.js")
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          query {
            mdx(sort: { order: ASC, fields: [frontmatter___date] }) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    tags
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        const posts = result.data.mdx.edges

        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          })
          resolve()
        })

        // Extract tag data from query
        // const tags = result.data.tagsGroup.group
        // // Make tag pages
        // tags.forEach((tag) => {
        //   createPage({
        //     path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        //     component: tagTemplate,
        //     context: {
        //       tag: tag.fieldValue,
        //     },
        //   })
        // })
      })
    )
  })
}
