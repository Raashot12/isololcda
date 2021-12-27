import React from "react"
import { Container } from "@material-ui/core"
import { Link } from "gatsby"
import logo from "../../images/logolocal.webp"
import { useMediaQuery } from "../../helpers/mediaQueries"
import PropTypes from "prop-types"
import TagMenu from "../TagMenu"
const Navbar = () => {
    const deviceSize = useMediaQuery()
    return (
      <div>
        <Container>
          <nav>
            <div className="logobrand-container">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo of Local goverment Isolo Lagos"
                  className="logo-icon"
                />
              </Link>

              <h4>ISOLO LOCAL COUNCIL DEVELOPMENT AREA</h4>
            </div>
            {/* <span>
                      <button href="contact">Get In Touch</button>
                  </span> */}
            { deviceSize === "desktop" || deviceSize === "tablet" ? <img src="https://res.cloudinary.com/rashot/image/upload/v1640622882/sg-7_j5izoa.gif" style={ { borderRadius: "1rem" } } alt="greeting for festive season" height="100px" width="auto" />: ""}  
          </nav>
        </Container>
        <TagMenu />
      </div>
    )
}

export default Navbar
Navbar.propTypes = {
    siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
    siteTitle: ``,
}
