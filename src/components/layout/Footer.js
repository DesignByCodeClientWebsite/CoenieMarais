import React from 'react'
import styled from 'styled-components'
import color from "../../utils/color"


const Footer = () => {
    return  (
        <FooterBar className="footer">
            <div className="wrapper">
                <div className="row">
                    <div className="md-col-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, soluta?
                    </div>
                    <div className="md-col-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, soluta?
                    </div>
                    <div className="md-col-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, soluta?
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
`