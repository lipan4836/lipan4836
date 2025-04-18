import type { ReactElement } from 'react';
import styles from './Header.module.scss';

function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <nav className={styles.nav}>
          <a className={styles['nav_link']} href="#about">
            About Me
          </a>
          <a className={styles['nav_link']} href="#stack">
            Stack
          </a>
          <a className={styles['nav_link']} href="#education">
            Education
          </a>
          <a className={styles['nav_link']} href="#language">
            Languages
          </a>
          <a className={styles['nav_link']} href="#code">
            Code Example
          </a>
          <a className={styles['nav_link']} href="#contact">
            Contact Info
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
