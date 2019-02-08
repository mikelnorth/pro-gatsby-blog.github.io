import React, { Component } from 'react'
import ReactDom from 'react-dom';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from "gatsby-image";


import logo from '../images/logo.svg';



// Styled Components
const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  position: relative;
  overflow: hidden;
  height: ${({isHome}) => (isHome?"70vh":"20vh")};
  h1{
    margin: 0;
    img{
      height: 80px;
    }
  }
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  Link{
    color: white;
    text-decoration: none;
  }
`
const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li{
      margin-left: 10px;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          border-bottom: 3px solid #524763;
        }
      }
    }
  }
`


export default class Header extends Component {

  componentDidMount(){
    if (this.props.location.pathname === '/') {
      this.wrapper.animate([{ height: "20vh" },{ height: "60vh" }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        })

    } else {
      this.wrapper.animate([{height: "60vh"}, {height: "20vh"}], {
        duration: 300,
        fill: "forwards",
        easing: "cubic-bezier(0.86, 0, 0.07, 1)",
        iterations: 1
      })
    }
  }



  render() {
    const {data, location} = this.props;
    return (
      <HeaderWrapper
      isHome={location.pathname === '/'}
      ref={(wrapper) => this.wrapper = ReactDom.findDOMNode(wrapper)}
      >
        <HeaderContainer>
          <h1>
            <Link to="/" >
              {/* {siteTitle} */}
              <img src={logo} alt="logo" />
            </Link>
          </h1>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
        <Img style={{
          position: 'absolute',
          left: '0',
          top: '0',
          width: '100%',
          height: '100%',
          opacity: "0.6"
        }}
          sizes={data.background.sizes} />

      </HeaderWrapper>
    )
  }
}
