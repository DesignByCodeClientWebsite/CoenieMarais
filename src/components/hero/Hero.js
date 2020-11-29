import React from 'react'
import styled from 'styled-components'
import HeroLogo from "./HeroLogo"
import HeroCardList from "./HeroCardList"

const Hero = () => {
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
    padding: 90px 0;
    
`