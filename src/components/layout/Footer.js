import React from 'react'
import styled from 'styled-components'
import color from "../../utils/color"
import Link from 'gatsby-link'


const Footer = () => {
    return  (
        <FooterBar className="footer">
            <div className="wrapper">
                <div className="row">
                    <div className="md-col-8">
                        <UlLinks>
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
                        </UlLinks>
                    </div>
                    <div className="md-col-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, soluta?
                    </div>
                    <div className='md-col-12'>
                        Design &amp; Developed by <a href="http://designbycode.co.za" target="_blank" rel="noreferrer">DesignByCode</a>
                    </div>
                </div>
            </div>
        </FooterBar>
    )
}

export default Footer

const FooterBar = styled.footer`
    background: ${color.dark};
    padding-top: 60px;
    padding-bottom: 60px;
    margin-top: auto;
    a {
        color: ${color.primary};
        text-decoration: none;
        &[aria-current="page"], 
        &:hover {
            text-decoration: underline;
        }
    }
`

const UlLinks = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    li {
        margin-right: 10px;
    }

`