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
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <div>
                <Container>
                    <Slider ref={ slider => ( this.slider = slider ) } { ...settings } className="center-slider">
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </Container>
            </div>
        );
    }
}