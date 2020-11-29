import React, { useEffect } from "react"
import GridItem from "./GridItem"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ClientDBC from './../../images/clients/designbycode.svg'


gsap.registerPlugin(ScrollTrigger);

const GridList = (props) => {

    const scrollTriggerRef = React.createRef();

    const scrollAnimation = () => {
        gsap.from(".ci", {
            scrollTrigger: {
                trigger: scrollTriggerRef.current,
                toggleActions: "play none none reverse",
                start: "top 80%",
                end: "bottom 90%",
                scrub: 1,
                markers: false
            },
            opacity: 0,
            y: 100,
            stagger: {
                amount: 0.5
            }
        });
    };

    useEffect(() => {
        scrollAnimation();
    });


    const DATA = [
        {
            id: 1,
            name: "DesignByCode",
            image: ClientDBC
        },
        {
            id: 2,
            name: "COENIE MARAIS",
            image: ClientDBC
        },
        {
            id: 3,
            name: "ZANEL",
            image: ClientDBC
        },
        {
            id: 4,
            name: "CLAUDE MYBURGH",
            image: ClientDBC
        },
        {
            id: 5,
            name: "Blomma",
            image: ClientDBC
        },
        {
            id: 6,
            name: "DesignByCode",
            image: ClientDBC
        }
    ]

    return  (
        <div ref={scrollTriggerRef}  className="row">
            {DATA && DATA.map(item => {
                return(
                    <div key={item.id}  className="xs-col-6 md-col-4 ci">
                        <GridItem name={item.name} image={item.image}/>
                    </div>
                )

            })}
        </div>
    )
}

export default GridList