import { Container } from "@material-ui/core"
import React, { Component } from "react"
import Slider from "react-slick"
import { motion } from "framer-motion"
export default class Inspection extends Component {
    constructor ( props ) {
        super( props )
        this.play = this.play.bind( this )
        this.pause = this.pause.bind( this )
    }
    play() {
        this.slider.slickPlay()
    }
    pause() {
        this.slider.slickPause()
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 3000,
        }
        return (
            <div>
                <Container>
                    <motion.h3
                        className="event-slider-carousel-text"
                    >
                        Inspection
                    </motion.h3>
                    <Slider
                        ref={ slider => ( this.slider = slider ) }
                        { ...settings }
                        style={ { height: "176px", overflow: "hidden", } }
                    >
                        { this.props.inspection.nodes[0].images.map( ( graphics, index ) => {
                            return (
                                <div key={ index }>
                                    <img
                                        src={ graphics.url }
                                        alt=""
                                        height="150px"
                                        width="auto"
                                        style={ { marginRight: "1.5rem" } }
                                    />
                                </div>
                            )
                        } ) }
                    </Slider>
                </Container>
            </div>
        )
    }
}
