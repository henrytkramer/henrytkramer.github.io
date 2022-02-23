import React, { useState } from "react"
import { Link } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"

import LinkWrap from "./link-wrap"
import * as navStyles from "./navigation.module.sass"

const Nav = (props) => {
    const breakpoints = useBreakpoint();
    const [expanded, setExpanded] = useState(false);

    return (
        <>
        <div className={navStyles.navigation}>
            <div className={navStyles.left}>
                <LinkWrap to="/" className={navStyles.navLink} activeClassName={navStyles.active}>Henry Kramer</LinkWrap>
            </div>

            { breakpoints.sm ? 
                <div className={navStyles.menuIcon} onClick={() => setExpanded(!expanded)}></div>
                :
                <div className={navStyles.right}>
                    <LinkWrap to="/about" className={navStyles.navLink} activeClassName={navStyles.active}>About</LinkWrap>
                    <LinkWrap to="/schedule" className={navStyles.navLink} activeClassName={navStyles.active}>Schedule</LinkWrap>
                    <LinkWrap to="/media" className={navStyles.navLink} activeClassName={navStyles.active}>Media</LinkWrap>
                    <LinkWrap to="/contact" className={navStyles.navLink} activeClassName={navStyles.active}>Contact</LinkWrap>
                    <a className={navStyles.navIcon, navStyles.navLink} href="https://www.instagram.com/henrykramerpiano/">
                        <FaInstagram />
                    </a>
                    <a className={navStyles.navIcon, navStyles.navLink} href="https://www.facebook.com/henrykramerpiano/">
                        <FaFacebookF />
                    </a>
                    <a className={navStyles.navIcon, navStyles.navLink} href="https://www.youtube.com/henrykramerpiano">
                        <FaYoutube />
                    </a>
                </div>
            }
        </div>

        { (expanded) &&
            <div className={navStyles.openMenu}>
                <div className={navStyles.menuIcon} onClick={() => setExpanded(!expanded)}></div>
                <ul>
                    <li>
                        <LinkWrap to="/about" className={navStyles.navLink} activeClassName={navStyles.active}>About</LinkWrap>
                    </li>
                    <li>
                        <LinkWrap to="/schedule" className={navStyles.navLink} activeClassName={navStyles.active}>Schedule</LinkWrap>
                    </li>
                    <li>
                        <LinkWrap to="/media" className={navStyles.navLink} activeClassName={navStyles.active}>Media</LinkWrap>
                    </li>
                    <li>
                        <LinkWrap to="/contact" className={navStyles.navLink} activeClassName={navStyles.active}>Contact</LinkWrap>
                    </li>
                    <li>
                        <a className={navStyles.navIcon, navStyles.navLink} href="https://www.instagram.com/henrykramerpiano/">
                            <FaInstagram />
                        </a>
                        <a className={navStyles.navIcon, navStyles.navLink} href="https://www.facebook.com/henrykramerpiano/">
                            <FaFacebookF />
                        </a>
                        <a className={navStyles.navIcon, navStyles.navLink} href="https://www.youtube.com/henrykramerpiano">
                            <FaYoutube />
                        </a>
                    </li>
                </ul>
            </div>
        }
        </>
    )
}

export default Nav