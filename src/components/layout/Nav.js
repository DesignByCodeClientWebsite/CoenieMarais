import React, { useState, useEffect } from 'react'
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import styled from 'styled-components'
import color from "../../utils/color"
// import logo from './../../images/nav-logo.svg'

import { FiMenu } from 'react-icons/fi'

const Nav = ({siteTitle}) => {

    let [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        let listener = window.addEventListener('resize', () => {
            handleResize()
        })

        return window.removeEventListener('resize', listener)
    })

    const handleToggleMenu = (e) => {
        return setIsOpen(!isOpen)
    }


    const handleResize = () => {
        if (window.innerWidth > 890 && isOpen) {
            setIsOpen(true)
        }
    }
    
    return  (
        <Headroom >
            <Navbar>
                <NavIcon onClick={handleToggleMenu}>
                    <FiMenu size={22} strokeWidth={3} stroke={color.primary}/>
                </NavIcon>
                {isOpen &&  <NavbarWrapper className="wrapper">
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
}
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
    font-size: 28px;
    a {
        color: ${color.dark};
        text-decoration: none;
    }
`

const Navbar = styled.nav`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background: ${color.white};
    transition: box-shadow 0.5s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: ease 0.2s transform;
    will-change: transform;
    @media(min-width: 890px) {
        height: auto;
    }
`
const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Ul = styled.ul`
    list-style: none;
    padding: 5px;
    margin: 0;
    li {
        display: inline-block;
        margin: 8px;
        width: 100%;
        @media(min-width: 890px) {
            width: auto;
            margin: 0 4px;
        }
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

const NavIcon = styled.aside`
    position: absolute;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: ${color.gray.light};
    border: solid 2px ${color.primary};
    right: 10px;
    top: 10px;
    @media(min-width: 890px) {
        display: none;
    }   
`