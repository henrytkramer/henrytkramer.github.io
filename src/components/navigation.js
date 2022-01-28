import React from "react"
import * as navStyles from "./navigation.module.sass"
import { Link } from "gatsby"
import LinkWrap from "./link-wrap"

import {FaFacebookF, FaYoutube, FaInstagram} from "react-icons/fa"

const Nav = (props) => (
    <div className={navStyles.navigation}>
        <div className={navStyles.left}>
            <LinkWrap to="/" className={navStyles.navLink} activeClassName={navStyles.active}>Henry Kramer</LinkWrap>
        </div>
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
    </div>
)

export default Nav