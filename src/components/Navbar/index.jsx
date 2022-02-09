import React,{useState} from "react"
import { Container } from "@material-ui/core"
import { Link } from "gatsby"
import logo from "../../images/logolocal.webp"
import { useMediaQuery } from "../../helpers/mediaQueries"
import PropTypes from "prop-types"
import TagMenu from "../TagMenu"

const Navbar = () => {
  const deviceSize = useMediaQuery()
  const [contact, setContact] = useState( false )
  const handleGetInTouch = () => {
    setContact(!contact)
  }
  
  return (
    <div>
      <Container>
        <nav>
          <div className="logobrand-container">
            <Link to="/">
              <img
                src={ logo }
                alt="logo of Local goverment Isolo Lagos"
                className="logo-icon"
              />
            </Link>

            <h4>ISOLO LOCAL COUNCIL DEVELOPMENT AREA</h4>
          </div>

          { deviceSize === "desktop" || deviceSize === "tablet" ? <span>
            <button href="contact" onClick={ handleGetInTouch }>{ contact ? '070-2512-0018' : 'Get In Touch' }</button>
          </span> : "" }
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
