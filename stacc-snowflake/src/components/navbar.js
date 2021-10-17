import s from './navbar.module.css';
import { useState } from 'react';
import About from './about.js';

function Navbar(props) {
    return (
        <div className={s.module}>
            <div className={s.icon}></div>

            <h3 className={s.logo}>snowflake</h3>
            <p onClick={props.handleVisibleAbout} className={s.navigation}>
                About
            </p>
            <p className={s.navigation}>Favorites</p>
            <p className={s.navigation}>Login</p>
        </div>
    );
}

export default Navbar;
