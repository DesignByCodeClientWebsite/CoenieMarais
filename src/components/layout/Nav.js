import React from 'react'
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import styled from 'styled-components'
import color from "../../utils/color"
// import logo from './../../images/nav-logo.svg'

const Nav = ({siteTitle}) => {
    return  (
        <Headroom >
            <Navbar>
                <NavbarWrapper className="wrapper">
                    <Brand className="title">
                        <Link className="hand" to="/">
                            Coenie Marais
                            {/*<img style={{height: '40px'}} src={logo} alt="logo" />*/}
                        </Link>
                    </Brand>
                    <Ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/about/">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/services/">SERVICES</Link>
                        </li>
                        <li>
                            <Link to="/work/">OUR WORK</Link>
                        </li>
                        <li>
                            <Link to="/contact/">CONTACT US</Link>
                        </li>
                    </Ul>
                </NavbarWrapper>
            </Navbar>
        </Headroom>
    )
}

Nav.propTypes = {
    siteTitle: PropTypes.string,
}

Nav.defaultProps = {
    siteTitle: ``,
}

export default Nav

const Brand = styled.div`
    font-size: 22px;
    a {
        color: ${color.dark};
        text-decoration: none;
    }
`

const Navbar = styled.nav`
    position: fixed;
    width: 100%;
    z-index: 100;
    background: ${color.white};
    transition: box-shadow 0.5s ease;
`
const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Ul = styled.ul`
    list-style: none;
    padding: 5px;
    margin: 0;
    li {
        display: inline-block;
        margin-left: 8px;
    }
    a {
       padding: 10px 16px;
       display: block;
       background: transparent;
       color: ${color.dark};
       border-radius: 10px;
       text-decoration: none;
       border-top: solid 1px transparent;
       border-left: solid 1px transparent;
       border-bottom: solid 3px transparent;
       border-right: solid 6px transparent;
       font-weight: bold;
       transition: color, border 0.25s ease;
       
       &[aria-current="page"] {
            border-top: solid 1px ${color.primary};
            border-left: solid 1px ${color.primary};
            border-bottom: solid 3px ${color.primary};
            border-right: solid 6px ${color.primary};
            color: ${color.primary}
       }
       &:not([aria-current="page"]):hover {
            border-top: solid 1px ${color.dark};
            border-left: solid 1px ${color.dark};
            border-bottom: solid 3px ${color.dark};
            border-right: solid 6px ${color.dark};
            color: ${color.dark}
       }
    }
`