import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import color from "../utils/color"



const Section = ({backgroundColor, svgColor, children}) => {
    return  (
        <SectionArea style={{backgroundColor: backgroundColor}}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1926.13 121.5">
                <path fill={svgColor} className="cls-1" d="M.07.5S906.7,121,964.7,121,1926.07.5,1926.07.5Z" />
            </Svg>
            <div className="wrapper">
                <div className="row">
                    {children}
                </div>
            </div>
        </SectionArea>
    )
}

Section.propTypes  = {
    backgroundColor: PropTypes.string,
}

Section.defaultProps = {
    backgroundColor: color.gray.light,
}

export default Section


const SectionArea = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100%;
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Svg = styled.svg`
    position: absolute;
    width: 100%;
    top: -1px;
`