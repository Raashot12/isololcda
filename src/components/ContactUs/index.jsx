import { Container } from "@material-ui/core"
import React from "react"

const ContactUs = () => {
  return (
    <div className="contact-us-contact">
      <Container>
        <div className="form-container">
          <form>
            <div className="input-container-form">
              <div>
                <label for="name">Name*</label>
              </div>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-container-form">
              <div>
                <label for="email">Email*</label>
              </div>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-container-form">
              <div>
                <label for="subject">Subject*</label>
              </div>
              <input type="text" placeholder="Type the subject" />
            </div>
            <div className="input-container-form">
              <div>
                <label for="message">Message</label>
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
