import styles from './Header.module.css';

import rocketLogo from '../assets/rocket-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={rocketLogo} alt="" />
                <span className={styles.to}>to</span>
                <span className={styles.do}>do</span>
            </div>
        </header>
    )
}