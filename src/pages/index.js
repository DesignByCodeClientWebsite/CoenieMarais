import React from 'react'
import SEO from "../components/layout/seo"
import Hero from "../components/hero/Hero"
import Section from "../components/Section"
import GridList from "../components/grid/GridList"
import Title from "../components/Title"

import color from "../utils/color"


const index = ({data}) => {

    return  (
        <>
            <SEO title="Home" />
            <Hero/>
            <Section>
                <div className="md-col-6">
                    <div>
                        <Title color={color.secondary}>Here is just a few of our happy 😊 client projects. ✨</Title>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque ea error explicabo odit perspiciatis voluptatem. Debitis eveniet exercitationem laboriosam praesentium ut? A beatae, esse fugiat iste obcaecati suscipit ut.</p>
                        <a href="#tag" className="btn btn--secondary">Button 1</a>
                    </div>
                </div>
                <div className="md-col-6">
                    <GridList/>
                </div>
            </Section>
            <Section backgroundColor={color.secondary}>
                <div className="md-col-6">

                </div>
                <div className="md-col-6">
                    <div>
                        <Title color={color.primary}>Here is just a few of our happy <span aria-label="smiling" role="img"> 😊 </span>client projects. <span aria-label="a rocket blasting off" role="img">✨</span> </Title>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque ea error explicabo odit perspiciatis voluptatem. Debitis eveniet exercitationem laboriosam praesentium ut? A beatae, esse fugiat iste obcaecati suscipit ut.</p>
                        <a href="#tag" className="btn btn--primary">Button 1</a>
                    </div>
                </div>

            </Section>
        </>
    )
}


export default index