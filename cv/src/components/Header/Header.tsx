import { useEffect, useState, type ReactElement } from 'react';
import styles from './Header.module.scss';

function Header(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return (): void => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <nav className={`${styles.nav} ${isMenuOpen ? styles['nav-open'] : ''}`}>
          <a className={styles['nav_link']} href="#summary" onClick={() => setIsMenuOpen(false)}>
            About Me
          </a>
          <a className={styles['nav_link']} href="#stack" onClick={() => setIsMenuOpen(false)}>
            Stack
          </a>
          <a className={styles['nav_link']} href="#education" onClick={() => setIsMenuOpen(false)}>
            Education
          </a>
          <a className={styles['nav_link']} href="#languages" onClick={() => setIsMenuOpen(false)}>
            Languages
          </a>
          <a className={styles['nav_link']} href="#example" onClick={() => setIsMenuOpen(false)}>
            Code Example
          </a>
          <a className={styles['nav_link']} href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact Info
          </a>
          <a className={styles['nav_link']} href="#colls" onClick={() => setIsMenuOpen(false)}>
            Collaborations
          </a>
        </nav>
        <button 
          className={`${styles.burger} ${isMenuOpen ? styles['burger-open'] : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles['burger-line']}></span>
          <span className={styles['burger-line']}></span>
          <span className={styles['burger-line']}></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
