import React from 'react'
import SEO from '../components/layout/seo'
import Section from '../components/Section'
import color from '../utils/color'

const ServicesPage = () => {
    return (
        <>
            <SEO title="Services"/>
            <Section svgColor={color.gray.light}>
                <div className="md-col-6">
                    <div style={{paddingTop: '90px'}}>
                        <header className='heading-group'>
                            <h1>Services</h1>
                            <h2 className='hand'>checkout  <span aria-label="camara with flash" role="img" style={{fontSize: '50%'}}>✔️</span>  what  </h2>
                            <h3>we can do for you </h3>
                        </header>

                        <p>I need images and content for the about page.</p>
                        <p>This is 60 words from &rarr; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio laudantium nihil officia sunt? Aliquid dicta esse magnam molestiae nisi non quis quisquam quo veniam voluptatem. Accusamus beatae deserunt dolores et fuga harum hic impedit non. Aliquam aliquid amet aperiam architecto at deleniti earum eius ipsa ipsam itaque laboriosam maiores nihil nisi numquam porro provident, quasi quos tempore vel velit, veniam.</p>
                        <a href="#tag" className="btn btn--dark">Button 1</a>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default ServicesPage