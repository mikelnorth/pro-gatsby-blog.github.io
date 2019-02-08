import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default class About extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>About Us</h1>
        <p>
            Normcore retro live-edge vinyl cloud bread photo booth shaman you probably haven't
            heard of them. 90's freegan actually franzen tbh pinterest prism migas asymmetrical
             next level semiotics. Actually retro iceland coloring book, quinoa DIY migas sriracha.
              Chicharrones venmo shoreditch, raclette wolf jean shorts vegan hashtag. Typewriter cardigan
              umami vegan leggings polaroid distillery. YOLO health goth tilde yr edison bulb 3 wolf moon
              try-hard chambray keytar vinyl banjo normcore adaptogen post-ironic shabby chic.
        </p>


        <Link to="/page-2/">Go to page 2</Link>

      </Layout>
    )
  }
}
