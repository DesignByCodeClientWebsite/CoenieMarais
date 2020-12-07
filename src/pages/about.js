import React from "react"

import SEO from "../components/layout/seo"
import Section from "../components/Section"
import color from "../utils/color"

const AboutPage = () => (

    <>
        <SEO title="About Us" />
        <Section svgColor={color.white} backgroundColor={color.white}>
            <div className="md-col-6"  style={{paddingTop: '90px'}}>
                <div>
                    <header className='heading-group'>
                        <h1>Need content</h1>
                        <h2 className='hand'>for about <span aria-label="camara with flash" role="img" style={{fontSize: '50%'}}>📸</span>  page </h2>
                        <h3>finished projects  </h3>
                    </header>

                    <p>I need images and content for the about page.</p>
                    <p>This is 60 words from &rarr; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio laudantium nihil officia sunt? Aliquid dicta esse magnam molestiae nisi non quis quisquam quo veniam voluptatem. Accusamus beatae deserunt dolores et fuga harum hic impedit non. Aliquam aliquid amet aperiam architecto at deleniti earum eius ipsa ipsam itaque laboriosam maiores nihil nisi numquam porro provident, quasi quos tempore vel velit, veniam.</p>
                    <a href="#tag" className="btn btn--secondary">Button 1</a>
                </div>
            </div>
        </Section>
    </>
)

export default AboutPage
