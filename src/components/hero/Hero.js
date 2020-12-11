import React, { useEffect } from 'react'
import styled from 'styled-components'
import HeroLogo from "./HeroLogo"
import HeroCardList from "./HeroCardList"
import LongShadow from '../../utils/LongShadow'


const Hero = () => {

    useEffect(() => {

    })

    return  (
        <HeroSection>
            <div className="wrapper">
                <div className="row" style={{alignItems: 'center'}}>
                    <div className="md-col-4">
                        <HeroLogo/>
                    </div>
                    <div className="md-col-8">
                        <HeroCardList/>
                    </div>
                </div>
            </div>
        </HeroSection>
    )
}

export default Hero

const HeroSection = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 140px 0 90px 0;
    
`