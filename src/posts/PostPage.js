import React, { Component } from 'react'
import Layout from '../components/layout';

export default class PostPage extends Component {
  render() {
      const { markdownRemark } = this.props.data;
    return (
      <Layout location={this.props.location}>
        <span>{markdownRemark.frontmatter.date}</span>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Layout>
    )
  }
}


export const query = graphql`
    query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {
        slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "MMMM DD YYYY")
            }
        }
    }
`;
