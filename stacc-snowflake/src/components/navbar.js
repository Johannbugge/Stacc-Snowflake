import s from './navbar.module.css';

function Navbar() {
    return (
        <div className={s.module}>
            <div className={s.icon}></div>

            <h3 className={s.logo}>snowflake</h3>
            <p>About</p>
            <p>Favorites</p>
            <p>Login</p>
        </div>
    );
}

export default Navbar;
