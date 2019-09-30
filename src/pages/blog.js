import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout';

const BlogPage = ({ data }) => (
  <Layout>
  <div>
    <div style={{display:'flex'}}>
  <h2>Account Balance :</h2>
  <h2 style={{color:'green',marginLeft:'10px'}}>700,000.34USD</h2>
  </div>
    <h2>Latest transactions</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          credited by {post.node.frontmatter.author} on{' '}
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage