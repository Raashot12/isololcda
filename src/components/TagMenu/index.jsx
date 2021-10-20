import React from "react"
import { Link } from "gatsby"
import { Container } from "@material-ui/core"
export const NavbarMenuLinks = [
    {
        title: "Home",
        route: "/",
    },
    {
        title: "Projects",
        route: "/projects",
    },
    {
        title: "Office of The Chairman",
        route: "/ofchairman",
    },
    {
        title: "Council Officials",
        route: "officals",
    },
]
const getSocialLinks = () => {
    return [
        {
            id: 1,
            icon: "fa-instagram",
            href: "https://instagram.com/trysamar",
            title: "Local government Instagram",
        },
        {
            id: 2,
            icon: "fa-youtube",
            title: "Local government YouTube",
            href: "https://www.youtube.com/channel/UCy4KzGrFAbS7EXcm-Y0JlpQ",
        },
        {
            id: 3,
            icon: "fa-facebook-square",
            title: "Local government Facebook",
            href: "https://fb.com/trysamar",
        },
        {
            id: 4,
            icon: "fa-twitter",
            title: "Local government Twitter",
            href: "https://twitter.com/trysamar",
        },
    ]
}

const TagMenu = () => {
    return (
        <div className="tagline-banner">
            <Container>

                <div className="tagline-container">
                    <div className="hamburger-box">
                        <i class="fas fa-hamburger"><span style={ { marginLeft: ".3rem" } }>Home</span></i>
                    </div>
                    <div className="menubar-list">
                        { NavbarMenuLinks.map( navitem => (
                            <Link to={ navitem.route } key={ navitem.route } className="nav-link">
                                { navitem.title }
                            </Link>
                        ) ) }
                    </div>
                    <div>
                        { getSocialLinks().map( socialLink => (
                            <Link
                                target="_blank"
                                to={ socialLink.href }
                                key={ socialLink.id }
                                className="social-mediai-icons"
                                title={ socialLink.title }
                            >
                                <span
                                    className={ `fab ${ socialLink.icon } icon-md-footer` }
                                    style={ { color: "white" } }
                                ></span>
                            </Link>
                        ) ) }
                    </div>
                </div>
            </Container>
            <div></div>
        </div>
    )
}

export default TagMenu

const MenuBar = () => {
    return <div></div>
}



