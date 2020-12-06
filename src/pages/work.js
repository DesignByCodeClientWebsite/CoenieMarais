import React from "react"
import SEO from "../components/layout/seo"
import Parallax from '../components/Parallax'
import Img1 from './../images/frontpage-first.jpg'
import Img2 from './../images/block-table.jpg'
import Img3 from './../images/frontpage-2.jpg'
import Img4 from './../images/barn-doors.jpg'


const WorkPage = ({ data }) =>
    (
        <>
            <SEO title='Our Work' />
            <Parallax img={Img1}>
                <header className='heading-group'>
                    <h1>Here is just a few</h1>
                    <h2 className='hand'>of our <span aria-label="smileing" role="img" style={{fontSize: '50%'}}>😊</span>  happy clients </h2>
                    <h3>work <span aria-label="sparkels" role="img">✨</span> </h3>
                </header>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto consequuntur neque nulla quae, rem repudiandae soluta temporibus ullam voluptatibus.</p>
            </Parallax>
            <Parallax img={Img2}>
                <header className='heading-group'>
                    <h1>For your</h1>
                    <h2 className='hand'>Business, Offices <span aria-label="smileing" role="img" style={{fontSize: '50%'}}>🛠️</span> </h2>
                    <h3> &amp; Store Fronts </h3>
                </header>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum nihil nobis perferendis quibusdam? Aliquid molestias reprehenderit rerum temporibus voluptas?</p>
            </Parallax>
            <Parallax img={Img3}>
                <header className='heading-group'>
                    <h1>For your</h1>
                    <h2 className='hand'>Business, Offices <span aria-label="smileing" role="img" style={{fontSize: '50%'}}>🛠️</span> </h2>
                    <h3> &amp; Store Fronts </h3>
                </header>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quis?</p>
            </Parallax>
            <Parallax img={Img4}>
                <header className='heading-group'>
                    <h1>For your</h1>
                    <h2 className='hand'>Business, Offices <span aria-label="smileing" role="img" style={{fontSize: '50%'}}>🛠️</span> </h2>
                    <h3> &amp; Store Fronts </h3>
                </header>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quae!</p>
            </Parallax>
        </>
    )


export default WorkPage

