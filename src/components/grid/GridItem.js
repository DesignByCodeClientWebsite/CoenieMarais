import React from 'react'
import withTilt from "../../hoc/WithTilt"

const GridItem = ({name, image}) => {
    return  (
        <div className="grid-item">
            <div style={{transform: 'translateZ(50px)'}}>
                <img style={{width: '100%', textAlign: 'center'}} src={image} alt={name} />
            </div>
        </div>
    )
}

export default withTilt(GridItem)