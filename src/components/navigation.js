import React from "react"
import * as navStyles from "./navigation.module.sass"
import { Link } from "gatsby"

import {FiInstagram} from "react-icons/fi" 
import {FaFacebookF, FaYoutube, FaInstagram} from "react-icons/fa"
import {AiOutlineYoutube} from "react-icons/ai"

const Nav = (props) => (
    <div className={navStyles.navigation}>
        <div className={navStyles.left}>
            <Link to="/" className={navStyles.navLink} activeClassName={navStyles.active}>Henry Kramer</Link>
        </div>
        <div className={navStyles.right}>
            <Link to="/about" className={navStyles.navLink} activeClassName={navStyles.active}>About</Link>
            <Link to="/schedule" className={navStyles.navLink} activeClassName={navStyles.active}>Schedule</Link>
            <Link to="/media" className={navStyles.navLink} activeClassName={navStyles.active}>Media</Link>
            <Link to="/contact" className={navStyles.navLink} activeClassName={navStyles.active}>Contact</Link>
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