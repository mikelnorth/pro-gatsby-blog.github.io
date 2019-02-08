import React, { Component } from 'react'
import { Link } from 'gatsby';
import matter from 'gray-matter';

export default class PostListing extends Component {
    render() {
        const {post} = this.props;
        return (
        <article>
            <h3><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h3>
            <span>{post.frontmatter.date}</span>
            <p>{post.excerpt}</p>
        </article>
        )
    }
}
