import logo from '../../imgs/logo.png';
import styles from './Header.module.scss';

function Header(){
    return(
        <header className={styles}>
            <div>
                <img src={logo} alt='inside'/>
                <input type="text" placeholder="search"/>
                <a href="">log in</a>
            </div>
        </header>
    );
}

export default Header;