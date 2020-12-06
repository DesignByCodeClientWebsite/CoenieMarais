import React, { useEffect, createRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Parallax = ({img, children}) => {

    const _parallax = createRef()
    const _parallaxImage = createRef()

    useEffect(() => {

        gsap.fromTo(_parallaxImage.current, {
            backgroundPositionY: `40%`},
            {
            backgroundPositionY: `-40%`,
            ease: "none",
            scrollTrigger: {
                trigger: _parallax.current,
                scrub: true
            }
        })
    })

    return  (
        <Section>
            <div className='wrapper'>
                <div className='row' style={{display: 'flex', alignItems: 'center'}}>
                    <div className='md-col-6'>
                        {children}
                    </div>
                    <div className='md-col-6'>
                        <ImageHolder ref={_parallax}>
                            <Img ref={_parallaxImage} style={{ backgroundImage: `url(${img})`}} />
                        </ImageHolder>
                    </div>

                </div>
            </div>
        </Section>
    )
}

Parallax.prototype = {
    img: PropTypes.object.isRequired
}


export default Parallax


const Section = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    // background: pink;
    overflow: hidden;
    &:nth-child(odd) {
        // background: lightblue;
     }
`

const Img = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 140%;
    width: 100%;
    display: block;
    transform: translateY(-20%);
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: 100% auto;a
`

const ImageHolder = styled.div`
    position: relative;
    height: 60vh;
    width: 100%;
    display: block;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(0,0,0,0.5) 30px 10px 40px;
`