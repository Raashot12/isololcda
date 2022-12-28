import React, { useState, useRef, useEffect } from "react"
import { Container } from "@material-ui/core"
import { motion, } from "framer-motion"
import classNames from 'classnames';
import clock from "../../images/clock.svg"
import image1 from "../../images/isololawa/1.webp"
import image2 from "../../images/isololawa/2.webp"
import image3 from "../../images/isololawa/3.webp"
import image4 from "../../images/isololawa/4.webp"
import image5 from "../../images/isololawa/5.webp"
import image6 from "../../images/isololawa/6.webp"
import image7 from "../../images/isololawa/7.webp"
import image8 from "../../images/isololawa/8.webp"
import image9 from "../../images/isololawa/9.webp"
import image10 from "../../images/isololawa/10.webp"
import image11 from "../../images/isololawa/11.webp"
import image12 from "../../images/isololawa/12.webp"
import image13 from "../../images/isololawa/13.webp"
import image14 from "../../images/isololawa/14.webp"
import image15 from "../../images/isololawa/15.webp"

const imageDate = [
  { image: image1, id: 1 },
  { image: image2, id: 2 },
  { image: image3, id: 3 },
  { image: image4, id: 4 },
  { image: image5, id: 5 },
  { image: image6, id: 6 },
  { image: image7, id: 7 },
  { image: image15, id: 15 },
  { image: image9, id: 9 },
  { image: image10, id: 10 },
  { image: image11, id: 11 },
  { image: image12, id: 12 },
  { image: image13, id: 13 },
  { image: image14, id: 14 },
]
const Countdown = () => {
  const [timerDays, setTimerDays] = useState( "00" )
  const [timerHour, setTimerHours] = useState( "00" )
  const [timerMinutes, setTimerMinutes] = useState( "00" )
  const [timerSeconds, setTimerSeconds] = useState( "00" )
  const [animate, setAnimate] = useState( false );
  const [selectedId, setSelectedId] = useState( null )
  const handleClick = ( id ) => {
    setSelectedId( id )
    setAnimate( !animate )
  };
  let interval = useRef()
  const sartTimer = () => {
    const countdownDate = new Date( "December 26, 2023 00:00:00" ).getTime()
    interval = setInterval( () => {
      const now = new Date().getTime()
      const distance = countdownDate - now
      const days = Math.floor( distance / ( 1000 * 60 * 60 * 24 ) )
      const hours = Math.floor(
        ( distance % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 )
      )
      const minutes = Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) )
      const seconds = Math.floor( ( distance % ( 1000 * 60 ) ) / 1000 )

      if ( distance < 0 ) {
        clearInterval( interval.current )
      } else {
        setTimerDays( days )
        setTimerHours( hours )
        setTimerMinutes( minutes )
        setTimerSeconds( seconds )
      }
    }, 1000 )
  }
  useEffect( () => {
    sartTimer()
    return () => {
      clearInterval( interval.current )
    }
  }, [] )

  return (
    <div>
      <Container>
        <section className="timer-container">
          <section className="timer">
            <div>
              <img src={ clock } alt="alarm clock" className="clock_icon" />
              <h2 className="edit_title">ISOLO LAWA COUNTDOWN: 2022 EDITION</h2>
              <p>
                Last year's Isolo Lawa was chartbuster. <br></br>These pics say
                it all. Make it a date again this year. 26th December is the
                Day! The countdown has begun in earnest
              </p>
            </div>
            <div>
              <section className="count-container">
                <p>{ timerDays }</p>
                <p>
                  <small>Days</small>
                </p>
              </section>
              <span>:</span>
              <section className="count-container">
                <p>{ timerHour }</p>
                <p>
                  <small>Hours</small>
                </p>
              </section>
              <span>:</span>
              <section className="count-container">
                <p>{ timerMinutes }</p>
                <p>
                  <small>Minutes</small>
                </p>
              </section>
              <span>:</span>
              <section className="count-container">
                <p>{ timerSeconds }</p>
                <p>
                  <small>Second</small>
                </p>
              </section>
            </div>
          </section>
        </section>
        <div>
          <h2 className="isolo_restropect">Isolo Lawa 2021 in retrospect</h2>
          <div className="restrospect-container">
            <div className="grid-countdown-wrapper">
              { imageDate.map( item => (
                <motion.div
                  key={ item.id }
                  layoutId={ item.id }
                  onClick={ () => handleClick( item.id ) }
                  className={ classNames(
                    "animate",
                    animate && selectedId == item.id && "grow stylize"
                  ) }
                >
                  <motion.img src={ item.image } width="100%" height="auto" loading="eager" />
                </motion.div>
              ) ) }
            </div>
            {/* <div className="preview-image">
              { item !== null && <img key={ item.id } src={ item.image } loading="lazy" /> }
            </div> */}
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Countdown
