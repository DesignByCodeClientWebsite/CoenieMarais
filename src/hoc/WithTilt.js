import React from "react"
import VanillaTilt from 'vanilla-tilt'

function withTilt(Component) {
    return class WithTilt extends React.Component {

        constructor(props) {
            super(props);
            this.tilt = React.createRef()
        }

        tiltAnimation () {
            VanillaTilt.init(this.tilt.current, {
                max: 20,
                speed: 1200,
                perspective: 1000,
                glare: true,
                reset: true
                // axis: "x"
            });
        }

        componentDidMount() {
            this.tiltAnimation()
        }

        render() {
            return (
                <div ref={this.tilt} style={{transformStyle: 'preserve-3d'}} >
                    <Component {...this.props}/>
                </div>
            )
        }
    }
}

export default withTilt