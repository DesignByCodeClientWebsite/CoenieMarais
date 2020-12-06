import React from 'react'
import styled from 'styled-components'

const HeroCard = ({color, img}) => {
    return  (
        <Card style={{backgroundColor: color}}>
            <Border></Border>
            <Image src={img} alt="caps"/>
        </Card>
    )
}

export default HeroCard

const Card = styled.div`
    width: 450px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0,0,0,0.5) -30px 10px 40px;
    transition: all 0.45s ease;
    
    &:not(:nth-child(1)) {
        margin-left: -30%;
    };
    &:nth-child(1) {
        transform: translateZ(-50px) scale(0.65);
        
    };
    &:nth-child(2) {
        transform: translateZ(0px) scale(0.85);
    };
    &:nth-child(3) {
        transform: translateZ(50px) scale(1);
    };
    &:hover ~ &:nth-child(1) {
        transform: translateX(200px) translateZ(-50px)  scale(0.65);
    };
    &:hover ~ &:nth-child(2) {
        transform: translateX(200px) translateZ(0px) scale(0.85);
    };
    &:hover ~ &:nth-child(3) {
        transform: translateX(200px) translateZ(50px) scale(1);
    };
    
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    display: block;
`

const Border = styled.div`
    position: absolute;
    z-index: 10;
    height: calc(100% - 30px);
    width: calc(100% - 30px);
    margin: 15px;
    border: solid 4px rgba(0,0,0,0.5);
    border-radius: 8px;
    transform: translateZ(50px)
`