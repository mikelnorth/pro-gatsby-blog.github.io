import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import PostListing from '../components/Posts/PostListing.js';



const IndexPage = ({data, location}) => (
  <Layout location={location}>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({node}) => {
      return <PostListing key={node.id} post={node}/>
    })}
  </Layout>
)

export default IndexPage

export const query = graphql`
query SiteMeta {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
          id
        frontmatter {
          title
          date(formatString:"MMMM DD YYYY")
        }
        fields{
          slug
        }
        html
        excerpt(pruneLength: 280)
        # gatsby plugin remark for more info (pruneLength:280)
      }
    }
  }
}
`

