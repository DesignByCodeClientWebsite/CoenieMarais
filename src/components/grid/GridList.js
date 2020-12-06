import React, { useEffect } from "react"
import GridItem from "./GridItem"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ClientDBC from './../../images/clients/designbycode.svg'
import { v4 as uuidv4 } from 'uuid'

gsap.registerPlugin(ScrollTrigger);

const GridList = (props) => {

    const scrollTriggerRef = React.createRef();

    // const scrollAnimation = () => {
    //     gsap.to(".ci", {
    //         scrollTrigger: {
    //             trigger: scrollTriggerRef.current,
    //             toggleActions: "play none none none",
    //             start: "top 80%",
    //             end: "top 20%",
    //             scrub: 1,
    //             markers: false
    //         },
    //         opacity: 1,
    //         x: 100,
    //         stagger: {
    //             amount: 0.5
    //         }
    //     });
    // };

    useEffect(() => {
        // scrollAnimation();
    });


    const DATA = [
        {
            id: uuidv4(),
            name: "DesignByCode",
            image: ClientDBC
        },
        {
            id: uuidv4(),
            name: "COENIE MARAIS",
            image: ClientDBC
        },
        {
            id: uuidv4(),
            name: "ZANEL",
            image: ClientDBC
        },
        {
            id: uuidv4(),
            name: "CLAUDE MYBURGH",
            image: ClientDBC
        },
        {
            id: uuidv4(),
            name: "Blomma",
            image: ClientDBC
        },
        {
            id: uuidv4(),
            name: "DesignByCode",
            image: ClientDBC
        }
    ]

    return  (
        <div ref={scrollTriggerRef}  className="row">
            {DATA && DATA.map(item => {
                return(
                    <div key={item.id.toString()}  className="xs-col-6 lg-col-4 ci">
                        <GridItem name={item.name} image={item.image}/>
                    </div>
                )

            })}
        </div>
    )
}

export default GridList