import React from "react"

const Footer = () => {
    const getYear = new Date().getFullYear();
    return (
        <div>
            <div className="footer-first-item">
                <h2>ISOLO LOCAL COUNCIL DEVELOPMENT AREA</h2>
                <a
                    href="mailto:olasojuadebayo.isololcda@gmail.com"
                    className="partnership mailto"
                    style={ { cursor: "pointer" } }
                >
                    olasojuadebayo.isololcda@gmail.com
                </a>
                <p className="telephone-number">070-2512-0018</p>
                <p className="address">Osolo Way, Aswani 102214, Lagos, Nigeria</p>
            </div>
            <div className="footerlast-item">
                <h4>©{ getYear } by ISOLO LCDA. Proudly created with RashDev</h4>
            </div>
        </div>
    )
}

export default Footer
