import { Container } from "@material-ui/core"
import React, { useState } from "react"
import Airtable from "airtable"
// import Spinner from "react-spinkit";
const ContactUs = () => {

  const [contact, setContact] = useState( { fullName: "", email: "", subject: "", message: "" } )
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
    e.preventDefault()
    getAirTableClient()
      .then( airtable => {
        airtable( "ContactUs" ).create(
          contact,
          { typecast: true },
          ( error, record ) => {
            if ( error ) {
              console.log( "an error occurred", error )
              return
            }
            console.log( "record created", record )
          }
        )
      } )
      .catch( e => {
        console.log( e )
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
              <input type="text" name="fullName" placeholder="Enter your name" required onChange={ handleChange } />
            </div>
            <div className="input-container-form">
              <div>
                <label htmlFor="email">Email*</label>
              </div>
              <input type="text" name="email" placeholder="Enter your email" required onChange={ handleChange } />
            </div>
            <div className="input-container-form">
              <div>
                <label htmlFor="subject">Subject*</label>
              </div>
              <input type="text" name="subject" placeholder="Type the subject" required onChange={ handleChange } />
            </div>
            <div className="input-container-form">
              <div>
                <label htmlFor="message">Message</label>
              </div>
              <textarea type="text" name="message" placeholder="Enter your message" required onChange={ handleChange } />
            </div>
            <div className="input-container-form">
              <button type="submit">Submit</button>
              {/* <Spinner name="circle" style={ { width: 100, height: 100 } } /> */ }
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default ContactUs
