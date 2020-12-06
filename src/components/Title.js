import React, {useEffect, createRef} from 'react'
import PropTypes from 'prop-types'
import color from "../utils/color"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Title = ({color, children}) => {

    const titleRef = createRef()

    useEffect(() => {
        gsap.to(titleRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.25,
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
                end: "bottom 70%",
                triggerActions: "play none none reverse",
                scrub: true,
                markers: false
            }
        })
    })


    return  (
        <header style={{position: 'relative', display: 'block'}}>
            <h1 ref={titleRef}
                className="title title-initial"
                style={{color: color, fontSize: 'clamp(1rem, 5vw, 3rem)' }}>
                {children}
            </h1>
        </header>
    )
}

Title.propTypes = {
    color: PropTypes.string,
}

Title.defaultProps = {
    color: color.primary
}


export default Title