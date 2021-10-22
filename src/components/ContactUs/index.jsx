import { Container } from "@material-ui/core"
import React from "react"

const ContactUs = () => {

  const handleFormSubmit = ( e ) => {
    e.preventDefault()
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
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-container-form">
              <div>
                <label htmlFor="email">Email*</label>
              </div>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-container-form">
              <div>
                <label htmlFor="subject">Subject*</label>
              </div>
              <input type="text" placeholder="Type the subject" />
            </div>
            <div className="input-container-form">
              <div>
                <label htmlFor="message">Message</label>
              </div>
              <textarea type="text" placeholder="Enter your email" />
            </div>
            <div className="input-container-form">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default ContactUs
