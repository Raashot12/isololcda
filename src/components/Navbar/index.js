import { Container } from "@material-ui/core"
import React from "react"
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
                        <img
                            src={ logo }
                            alt="logo of Local goverment Isolo Lagos"
                            className="logo-icon"
                        />
                        { deviceSize === "desktop" ? <h4>ISOLO LOCAL COUNCIL DEVELOPMENT AREA </h4> : deviceSize === "tablet" ? <h4>ISOLO LOCAL COUNCIL DEVELOPMENT AREA </h4> : <h4>ISOLO LCDA </h4> }

                    </div>
                    <span>
                        <button>Get In Touch</button>
                    </span>
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