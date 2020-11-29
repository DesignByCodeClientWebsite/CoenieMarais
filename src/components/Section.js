import React from 'react'
import styled from 'styled-components'
import color from "../utils/color"

import PropTypes from 'prop-types'

const Section = ({backgroundColor, children}) => {
    return  (
        <SectionArea style={{backgroundColor: backgroundColor}}>
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
    min-height: 100vh;
    width: 100%;
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`