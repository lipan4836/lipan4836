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
          <a className={styles['nav_link']} href="#languages">
            Languages
          </a>
          <a className={styles['nav_link']} href="#example">
            Code Example
          </a>
          <a className={styles['nav_link']} href="#contact">
            Contact Info
          </a>
          <a className={styles['nav_link']} href="#colls">
            Collaborations
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
