import logo from '../../imgs/logo.png';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles}>
            <div className={styles.content}>
                <img src={logo} alt='inside' />
                <input type="text" placeholder="search" />
                <div className={styles.login_block}>
                </div>
            </div>
        </header>
    );
}

export default Header;