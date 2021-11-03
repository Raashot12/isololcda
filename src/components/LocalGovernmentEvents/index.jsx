import { Container } from "@material-ui/core";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
    constructor ( props ) {
        super( props );
        this.play = this.play.bind( this );
        this.pause = this.pause.bind( this );
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
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
            autoplaySpeed: 2000
        };
        console.log( this.props.occassion.nodes[0].images )
        return (
            <div>
                <Container>
                    <Slider ref={ slider => ( this.slider = slider ) } { ...settings } style={ { height: "176px" } } >
                        { this.props.occassion.nodes[0].images.map( ( graphics, index ) => {
                            return <div key={ index } >
                                <img src={ graphics.url } alt="" height="150px" width="auto" style={ { marginRight: "2rem" } } />
                            </div>
                        } ) }
                    </Slider>
                </Container>
            </div>
        );
    }
}

