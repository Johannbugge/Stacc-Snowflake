import s from './navbar.module.css';

function Navbar() {
    return (
        <div className={s.module}>
            <div className={s.icon}></div>

            <h3 className={s.logo}>snowflake</h3>
            <p className={s.navigation}>About</p>
            <p className={s.navigation}>Favorites</p>
            <p className={s.navigation}>Login</p>
        </div>
    );
}

export default Navbar;
