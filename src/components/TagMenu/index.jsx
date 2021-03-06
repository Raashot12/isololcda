import React, { useState } from "react"
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
        title: "Blog",
        route: "/blog",
    },
    {
        title: "Council Officials",
        route: "/officials",
    },
    {
        title: "Office of The Chairman",
        route: "/ofchairman",
    },
]
const getSocialLinks = () => {
    return [
        {
            id: 1,
            icon: "fa-instagram",
            href: "https://www.instagram.com/bayo_olasoju/",
            title: "Local government Instagram",
        },
        {
            id: 2,
            icon: "fa-youtube",
            title: "Local government YouTube",
            href: "https://www.youtube.com/channel/UClqZ4erdAFqNptf1fDdZJgg?app=desktop",
        },
        {
            id: 3,
            icon: "fa-facebook-square",
            title: "Local government Facebook",
            href: "https://web.facebook.com/groups/832579194037271/",
        },
    ]
}

const TagMenu = () => {
    const [hamburger, setHamburger] = useState( false )


    const handleClose = () => {
        setHamburger( !hamburger )
    }
    return (
        <div className="tagline-banner">
            <Container>
                <div className="tagline-container">
                    <div className="hamburger-box">
                        <i className="fas fa-hamburger" onClick={ handleClose }>
                            <span style={ { marginLeft: ".3rem" } }>Menu</span>
                        </i>
                    </div>
                    <div className="menubar-list">
                        { NavbarMenuLinks.map( navitem => (
                            <Link
                                to={ navitem.route }
                                key={ navitem.route }
                                activeClassName="active"
                                className="nav-link"
                            >
                                { navitem.title }
                            </Link>
                        ) ) }
                    </div>
                    <div className="social-media-icon-container">
                        { getSocialLinks().map( socialLink => (
                            <a
                                target="_blank"
                                href={ socialLink.href }
                                key={ socialLink.id }
                                className="social-mediai-icons"
                                title={ socialLink.title }
                            >
                                <span
                                    className={ `fab ${ socialLink.icon } icon-md-footer` }
                                    style={ { color: "white" } }
                                ></span>
                            </a>
                        ) ) }
                    </div>
                </div>
            </Container>
            <MenuBar
                handleClose={ handleClose }
                setHamburger={ setHamburger }
                hamburger={ hamburger }
            />
        </div>
    )
}

export default TagMenu

const MenuBar = ( { handleClose, setHamburger, hamburger } ) => {
    const handleMenuClose = () => {
        setHamburger( false )
    }
    return (
        <div>
            <div className={ `sidebar-container-${ hamburger }` }>
                <i className="fas fa-times" onClick={ handleClose }></i>
                { NavbarMenuLinks.map( navitem => (
                    <Link
                        to={ navitem.route }
                        onClick={ handleMenuClose }
                        key={ navitem.route }
                        activeClassName="active"
                        className="sidebar-list"
                    >
                        { navitem.title }
                    </Link>
                ) ) }
                { getSocialLinks().map( socialLink => (
                    <a
                        target="_blank"
                        href={ socialLink.href }
                        key={ socialLink.id }
                        className="social-mediai-icons"
                        title={ socialLink.title }
                    >
                        <span
                            onClick={ handleClose }
                            className={ `fab ${ socialLink.icon } icon-md-footer-tagline` }
                            style={ { color: "white" } }
                        ></span>
                    </a>
                ) ) }
            </div>
        </div>
    )
}
