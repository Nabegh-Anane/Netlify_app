import React, { useState } from 'react'; 
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';
import { Link } from "react-router-dom";
const NavProjects = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a href="/">
                <img className={styles.logo} src="https://nabeghanane-portfolio.imgix.net/assets/nav/NEvolution_white.png" alt="Logo Nabegh Anane" />
            </a>

            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? "https://nabeghanane-portfolio.imgix.net/assets/nav/closeIcon.png" : "https://nabeghanane-portfolio.imgix.net/assets/nav/menuIcon.png" }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                       <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/about`}>About</Link>
                    </li>
                    <li>
                        <Link to={`/skills`}>Skills</Link>
                    </li>
                    <li>
                        <Link to={`/contact`}>Contact</Link>
                    </li>
                </ul>

                <img
                    className={styles.languageIcon}
                    src={languageMenuOpen ? "https://nabeghanane-portfolio.imgix.net/assets/nav/closeIcon.png" : "https://nabeghanane-portfolio.imgix.net/assets/nav/langIcon.png" }
                    alt="language-icon"
                    onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                />
            </div>

            {languageMenuOpen && (
                <div className={styles.languageMenu}>
                    <img
                        className={styles.menuFlag}
                        src="https://nabeghanane-portfolio.imgix.net/assets/nav/Anglais.png"
                        alt="Anglais"
                    />
                </div>
            )}
        </nav>
    );
}

export default NavProjects;
