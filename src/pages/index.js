import React from 'react'
import styled from 'styled-components'
import SEO from "../components/layout/seo"
import Hero from "../components/hero/Hero"
import Section from "../components/Section"
import GridList from "../components/grid/GridList"
import color from "../utils/color"
import Img1 from './../images/frontpage-first.jpg'
import Img2 from './../images/frontpage-2.jpg'
import Link from 'gatsby-link'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const index = ({data}) => {

    return  (
        <>
            <SEO title="Home" />
            <Hero/>
            <Section backgroundColor={color.white} svgColor={color.white}>
                <div className='row'>
                    <div className='md-col-4'>
                        <Images1 src={Img1} alt='Welcome to coenie marais' />
                    </div>
                    <div className='md-col-8'>
                        <div className='row'>
                            <div className='md-col-12'>
                                <header className='heading-group'>
                                    <h1><span aria-label="waving hand" role="img">👋</span>   Welcome to</h1>
                                    <h2 className='hand'>Coenie Marais</h2>
                                    <h3 style={{ borderTop: `solid 3px ${color.primary}`, marginTop: 20}}>Inhouse finishings </h3>
                                </header>
                            </div>
                            <div className='md-col-12' style={{marginTop: 30}}>
                                <p>For most people the biggest investment they will ever make is buying a home. But to make a home as you
                                    envisioned it in your dreams isn’t as easy as you might think.</p>

                                <p>That is why we here at Coenie Marais In House Finishing specializing in weaving dreams into reality.</p>

                                <p>From something as simple as a door, a cupboard, skirtings or that dreamy outdoor patio you were thinking
                                    about. Yes, all that you mind can conjure up, we can make it into reality with that extra wow factor
                                    included to make your home unique to you. All our work is fully guaranteed to give you that extra peace
                                    of mind.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section backgroundColor={color.gray.light} svgColor={color.white}>
                <div className='row'>
                    <div className='md-col-8'>
                        <div className='row'>
                            <div className='md-col-12'>
                                <header className='heading-group'>
                                    <h1>For your</h1>
                                    <h2 className='hand'>Business, Offices <span aria-label="smileing" role="img" style={{fontSize: '50%'}}>🛠️</span> </h2>
                                    <h3> &amp; Store Fronts </h3>
                                </header>
                            </div>
                            <div className='md-col-12' style={{marginTop: 30}}>
                                <p>Unlike other company’s out there we can accommodate you with a diverse variety of services. That
                                    basically makes us your one stop shop for all your home, business or office needs. This will help you to
                                    reduce to number of contractors on site that you need to hire and communicate with. While at the same
                                    time giving you a constant theme throughout your project and in turn also bring cost down.</p>

                                <p>See our Services page to learn more about what we can do for u or browse through our gallery to see our
                                    work for yourself.</p>
                                <a href="#tag" className="btn btn--dark">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className='md-col-4'>
                        <Images2 src={Img2} alt='Welcome to coenie marais' />
                    </div>
                </div>
            </Section>


            {/*Temp*/}
            {/*// <Section backgroundColor={color.secondary} svgColor={color.gray.light}>*/}
            {/*//     <div className='row'>*/}
            {/*//         <div className='md-col-8'>*/}
            {/*/!*            <div className='row'>*!/*/}
            {/*/!*                <div className='md-col-12'>*!/*/}
            {/*/!*                    <header className='heading-group'>*!/*/}
            {/*/!*                        <h1>For your</h1>*!/*/}
            {/*//                         <h2 className='hand'>Business, Offices <span aria-label="smileing" role="img" style={{fontSize: '50%'}}>🛠️</span> </h2>*/}
            {/*//                         <h3> &amp; Store Fronts </h3>*/}
            {/*//                     </header>*/}
            {/*//                 </div>*/}
            {/*//                 <div className='md-col-12' style={{marginTop: 30}}>*/}
            {/*//                     <p>Unlike other company’s out there we can accommodate you with a diverse variety of services. That*/}
            {/*//                         basically makes us your one stop shop for all your home, business or office needs. This will help you to*/}
            {/*//                         reduce to number of contractors on site that you need to hire and communicate with. While at the same*/}
            {/*//                         time giving you a constant theme throughout your project and in turn also bring cost down.</p>*/}
            {/*//*/}
            {/*//                     <p>See our Services page to learn more about what we can do for u or browse through our gallery to see our*/}
            {/*//                         work for yourself.</p>*/}
            {/*//                     <a href="#tag" className="btn btn--dark">Contact Us</a>*/}
            {/*//                 </div>*/}
            {/*//             </div>*/}
            {/*        </div>*/}
            {/*        <div className='md-col-4'>*/}
            {/*            <ImageHolder>*/}
            {/*                <ImageInner src={Img1} alt='Welcome to coenie marais' />*/}
            {/*                <ImageInner src={Img2} alt='Welcome to coenie marais' />*/}
            {/*            </ImageHolder>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Section>*/}


            <Section backgroundColor={color.white} svgColor={color.gray.light}>
                <div className="md-col-6">
                    <div className="mb">
                        <header className='heading-group'>
                            <h1>Here is just a few</h1>
                            <h2 className='hand'>of our <span aria-label="smileing" role="img" style={{fontSize: '50%'}}>😊</span>  happy clients </h2>
                            <h3>work <span aria-label="sparkels" role="img">✨</span> </h3>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum harum magni minima nihil porro. Delectus esse nisi quia reprehenderit temporibus! Ab aperiam autem commodi cupiditate dicta doloremque doloribus itaque molestiae, nulla, ratione, sed sunt suscipit vel! Accusamus atque aut blanditiis consequatur distinctio</p>
                        <Link to="/work/" className="btn btn--dark">View Our Work</Link>
                    </div>
                </div>
                <div className="md-col-6">
                    <GridList/>
                </div>
            </Section>
        </>
    )
}

export default index

const Images1 = styled.img`
    position: relative;
    object-fit: cover;
    max-width: 120%;
    transform: translate(-20%, -10%);
    border-radius: 0 10px 10px 0;
    box-shadow: rgba(0,0,0,0.5) 30px 10px 40px;
    display: none;
    @media(min-width: 768px) {
        display: block;
    }
`

const Images2 = styled(Images1)`
    transform: translate(10%, -10%);
    border-radius: 10px 0 0 10px;
    box-shadow: rgba(0,0,0,0.5) -30px 10px 40px;
`
//
// const ImageHolder = styled.div`
//     width: 490px;
//     height: 600px;
//     background: ${color.primary};
//     transform: translate(10%, -10%);
//     border-radius: 10px 0 0 10px;
//     box-shadow: rgba(0,0,0,0.5) -30px 10px 40px;
//     display: flex;
//     flex-direction: row;
//     overflow: hidden;
// `
//
// const ImageInner = styled.img`
//     position: relative;
//     display: block;
//     width: 100%;
//     object-fit: fill;
// `