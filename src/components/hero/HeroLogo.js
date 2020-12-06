import React from 'react'
import styled from 'styled-components'


import color from "../../utils/color"
import shadow from "../../utils/shadow"
import LogoImage from './../../images/logo.svg'
import pattern from './../../images/hideout.svg'
import withTilt from "../../hoc/WithTilt"
const HeroLogo = () => {

    return  (
        <div style={{position: 'relative', borderRadius: '10px'}}>
            <Pattern/>
            <Pattern2/>
            <Logo>
                <Image src={LogoImage} alt="logo" />
            </Logo>
        </div>
    )
}

export default withTilt(HeroLogo, {max: 100})


const Logo = styled.div`
    position: relative;
    background: ${color.dark};
    border-radius: 10px;
    padding: 30px;
    box-shadow: ${shadow.level3};
    z-index: 5;
    transform: translateZ(0px);
    
`

const Image = styled.img`
    position: relative;
    max-width: 100%;
    transform: translateZ(200px);
`

const Pattern = styled.div`
    position: absolute;
    width: 250px;
    height: 250px;
    background-image: url(${pattern});
    background-size: 50px;
    background-position: 15px 5px;
    z-index: 1;
    top: -100px;
    right: -100px;
    opacity: 0.15;
    transform: translateZ(-60px);
`

const Pattern2 = styled.div`
    position: absolute;
    width: 250px;
    height: 250px;
    background-image: url(${pattern});
    background-size: 50px;
    background-position: 15px 5px;
    z-index: 1;
    bottom: -100px;
    left: -100px;
    opacity: 0.15;
    transform: translateZ(-90px)
`

