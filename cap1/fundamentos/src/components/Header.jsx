import styles from './Header.module.css';
import logo from '../assets/logo.svg';

export function Header() {
    return (
        <header>
            <div className={styles.header}>
                <img src={logo} alt="Logo do site" />
                <strong>JupiterSass</strong>
            </div>
        </header>
    );
}