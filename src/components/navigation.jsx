import React, { useState } from "react"
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

import LinkWrap from "./link-wrap"
import * as navStyles from "./navigation.module.sass"

const Nav = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
        <div className={navStyles.navigation}>
            <div className={navStyles.left}>
                <LinkWrap to="/" className={navStyles.navLink} activeClassName={navStyles.active}>Henry Kramer</LinkWrap>
            </div>

            {/* Only shows on desktop */}
            <div className={navStyles.right}>
                <LinkWrap to="/about" className={navStyles.navLink} activeClassName={navStyles.active}>About</LinkWrap>
                <LinkWrap to="/schedule" className={navStyles.navLink} activeClassName={navStyles.active}>Schedule</LinkWrap>
                <LinkWrap to="/media" className={navStyles.navLink} activeClassName={navStyles.active}>Media</LinkWrap>
                <LinkWrap to="/contact" className={navStyles.navLink} activeClassName={navStyles.active}>Contact</LinkWrap>
                <a className={`${navStyles.navIcon} ${navStyles.navLink}`} href="https://www.instagram.com/henrykramerpiano/">
                    <FaInstagram />
                </a>
                <a className={`${navStyles.navIcon} ${navStyles.navLink}`} href="https://www.facebook.com/henrykramerpiano/">
                    <FaFacebookF />
                </a>
                <a className={`${navStyles.navIcon} ${navStyles.navLink}`} href="https://www.youtube.com/henrykramerpiano">
                    <FaYoutube />
                </a>
            </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${navStyles.menuIcon} ${expanded ? navStyles.expanded : ""}`} onClick={() => setExpanded(!expanded)}></div>
        { (expanded) &&
            <motion.div 
                className={navStyles.openMenu}
                variants={MENU_CONTAINER}
                initial="hidden"
                animate="enter"
            >
                <motion.ul variants={MENU_MOTION} initial="hidden" animate="enter">
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
                    <li className={navStyles.socials}>
                        <a className={`${navStyles.navIcon} ${navStyles.navLink}`} href="https://www.instagram.com/henrykramerpiano/">
                            <FaInstagram /> Instagram
                        </a>
                        <a className={`${navStyles.navIcon} ${navStyles.navLink}`} href="https://www.facebook.com/henrykramerpiano/">
                            <FaFacebookF /> Facebook
                        </a>
                        <a className={`${navStyles.navIcon} ${navStyles.navLink}`} href="https://www.youtube.com/henrykramerpiano">
                            <FaYoutube /> Twitter
                        </a>
                    </li>
                </motion.ul>
            </motion.div>
        }
        </>
    )
}

const MENU_CONTAINER = {
    enter: {
        opacity: 1,
        transition: {
            type: "easeOutCubic", 
            duration: 0.4 
        }
    },

    hidden: {
        opacity: 0,
    }
} 

const MENU_MOTION = {
    enter: {
        scale: 1,
        translateY: 0,
        transition: {
            type: "easeOutCubic", 
            duration: 0.3
        }
    },

    hidden: {
        scale: 1.2,
        translateY: 20
    }
}

export default Nav