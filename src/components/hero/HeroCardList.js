import React from 'react'
import styled from 'styled-components'
import HeroCard from "./HeroCard"
import color from "../../utils/color"
import caps from './../../images/caps-case.jpg'
import bags from './../../images/bag-rack.jpg'
import salon from './../../images/hair-salon.jpg'


const HeroCardList = () => {

    const DATA = [
        {
            color: color.primary,
            img: caps
        },
        {
            color: color.secondary,
            img: salon
        },
        {
            color: color.dark,
            img: bags
        },
    ]

    return  (
        <List>

            {DATA && DATA.map((item, index) => {
                return <HeroCard key={index} color={item.color} img={item.img}/>
            })

            }


        </List>
    )
}

export default HeroCardList


const List = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    transform: translateX(10%)
`