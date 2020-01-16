import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    
                    <div className={styles.header__avatar}>
                        <div><img className={styles.header__img} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"></img></div>
                        <div className={styles.header__data}>
                            <div className={styles.header__name}>Zaiyr</div>
                            <div className={styles.header__surname}>Sharsheyev</div>
                            <div className={styles.header__title}>Test Task on React + Redux</div>
                        </div>
                    </div>

                    <nav className="nav">
                        <NavLink to="/main" className={styles.nav__link} activeClassName={styles.activeLink}>Main</NavLink>
                        <NavLink to="/users" className={styles.nav__link} activeClassName={styles.activeLink}>Users</NavLink>
                    </nav>

                </div>  
            </div> 
        </header>
    )
}

export default Navbar;