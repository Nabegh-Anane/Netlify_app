import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a href="/">
                <img className={styles.logo} src={getImageUrl("nav/NEvolution_white.png")} alt="Logo Nabegh Anane" />
            </a>

            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                <img
                    className={styles.languageIcon}
                    src={languageMenuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/langIcon.png")}
                    alt="language-icon"
                    onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                />
            </div>

            {languageMenuOpen && (
                <div className={styles.languageMenu}>
                    <img
                        className={styles.menuFlag}
                        src={getImageUrl("nav/Anglais.png")}
                        alt="Anglais"
                    />
                    
                </div>
            )}


        </nav>
    );
}

export default Navbar;
