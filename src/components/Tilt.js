import React, {createRef, Fragment, useEffect} from 'react'
import VanillaTilt from 'vanilla-tilt'

const Tilt = ( props, {children}) => {

    const _tilt = createRef()

    useEffect(() => {
        VanillaTilt.init(_tilt.current, {
            max: 10,
            speed: 1200,
            perspective: 1000,
            reset: true
        });
    })


    return  (
        <div ref={_tilt} {...props}>
            {children}
        </div>
    )
}

export default Tilt