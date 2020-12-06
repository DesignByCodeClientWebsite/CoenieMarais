import React from "react"

import SEO from "../components/layout/seo"
import Section from "../components/Section"
import Title from "../components/Title"
import color from "../utils/color"
import GridList from "../components/grid/GridList"

const AboutPage = () => (

    <>
        <SEO title="About Us" />
        <Section svgColor={color.gray.light}>
            <div className="md-col-6">
                <div>
                    <Title color={color.secondary}>Here is just a few of our happy client projects.</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque ea error explicabo odit perspiciatis voluptatem. Debitis eveniet exercitationem laboriosam praesentium ut? A beatae, esse fugiat iste obcaecati suscipit ut.</p>
                    <a href="#tag" className="btn btn--secondary">Button 1</a>
                </div>
            </div>
            <div className="md-col-6">
                <GridList/>

            </div>
        </Section>

        <Section backgroundColor={color.primary} svgColor={color.gray.light}>
            <div className="md-col-6">
                <div>
                    <Title color={color.dark}><span className="hand">Hello world, to my</span> about page</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque ea error explicabo odit perspiciatis voluptatem. Debitis eveniet exercitationem laboriosam praesentium ut? A beatae, esse fugiat iste obcaecati suscipit ut.</p>
                    <a href="#tag" className="btn btn--dark">Button 1</a>
                </div>
            </div>
            <div className="md-col-6">
                <GridList/>
            </div>
        </Section>


    </>
)

export default AboutPage
