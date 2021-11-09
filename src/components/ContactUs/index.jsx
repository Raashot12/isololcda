import { Container } from "@material-ui/core"
import React, { useState } from "react"
import Airtable from "airtable"
import Spinner from "react-spinkit";
import swal from 'sweetalert';

const ContactUs = () => {

  const [contact, setContact] = useState( { fullName: "", email: "", subject: "", message: "" } )
  const [isSubmitting, setIsubmitting] = useState( false )
  const handleChange = e => {
    setContact( {
      ...contact,
      [e.target.name]: e.target.value,
    } )
  }
  //   const key =  process.env.GATSBY_AIRTABLE_API_KEY
  // console.log(key)
  const getAirTableClient = () => {
    return new Promise( ( resolve, reject ) => {
      // const AIRTABLE_API_KEY = process.env.GATSBY_AIRTABLE_API_KEY
      // const AIRTABLE_BASE_KEY = process.env.GATSBY_AIRTABLE_BASE
      return resolve(
        new Airtable( { apiKey: "key5HjiQR8IA7r0Zx" } ).base( "app7slHC9hSRyErEm" )
      )
    } )
  }



  const handleFormSubmit = e => {
    setIsubmitting( true )
    e.preventDefault()
    getAirTableClient()
      .then( airtable => {
        airtable( "ContactUs" ).create(
          contact,
          { typecast: true },
          ( error, record ) => {
            if ( error ) {
              console.log( "an error occurred", error )
              setIsubmitting( false )

              return
            }
            console.log( "record created", record )
            swal( "Submitted Successfully!", "You clicked the button!", "success" );
            setIsubmitting( false )
            setContact( { fullName: "", email: "", subject: "", message: "" } )
          }
        )
      } )
      .catch( e => {
        console.log( e )
        setIsubmitting( false )
      } )

  }



  return (
    <div className="contact-us-contact">
      <Container>
        <div className="form-container">
          <h1 className="contactus-text">Contact</h1>
          <form onSubmit={ handleFormSubmit }>
            <div className="input-container-form">
              <div>
                <label htmlFor="name">Name*</label>
              </div>
              <input type="text" name="fullName" value={ contact.fullName } placeholder="Enter your name" required onChange={ handleChange } />
            </div>
            <div className="input-container-form">
              <div>
                <label htmlFor="email">Email*</label>
              </div>
              <input type="text" name="email" value={ contact.email } placeholder="Enter your email" required onChange={ handleChange } />
            </div>
            <div className="input-container-form">
              <div>
                <label htmlFor="subject">Subject*</label>
              </div>
              <input type="text" name="subject" value={ contact.subject } placeholder="Type the subject" required onChange={ handleChange } />
            </div>
            <div className="input-container-form">
              <div>
                <label htmlFor="message">Message</label>
              </div>
              <textarea type="text" name="message" value={ contact.message } placeholder="Enter your message" required onChange={ handleChange } />
            </div>
            <div className="input-container-form">
              { !isSubmitting ? <button type="submit">Submit</button> :
                <div style={ { display: "flex", alignItems: "center", justifyContent: "center" } } className="spinner-container">
                  <Spinner name="circle" className="spinner" />
                </div>
              }
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default ContactUs
