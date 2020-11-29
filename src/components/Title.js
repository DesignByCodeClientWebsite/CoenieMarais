import React from 'react'
import PropTypes from 'prop-types'
import color from "../utils/color"


const Title = ({color, children}) => {
    return  (<h1 className="title" style={{color: color, fontSize: 'clamp(1rem, 5vw, 3rem)' }}>{children}</h1>)
}

Title.propTypes = {
    color: PropTypes.string,
}

Title.defaultProps = {
    color: color.primary
}


export default Title