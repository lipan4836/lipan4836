import { useEffect, useState, type ReactElement } from 'react';
import styles from './Header.module.scss';
import LangSwitch from '../UI/LangSwitch/LangSwitch';
import { useTranslation } from 'react-i18next';

function Header(): ReactElement {
  const { t } = useTranslation('header')
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

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <nav className={`${styles.nav} ${isMenuOpen ? styles['nav-open'] : ''}`}>
          <div onClick={closeMenu}>
            <LangSwitch />
          </div>
          <a className={styles['nav_link']} href="#summary" onClick={() => setIsMenuOpen(false)}>
            {t('about_me')}
          </a>
          <a className={styles['nav_link']} href="#stack" onClick={() => setIsMenuOpen(false)}>
            {t('stack')}
          </a>
          <a className={styles['nav_link']} href="#education" onClick={() => setIsMenuOpen(false)}>
            {t('education')}
          </a>
          <a className={styles['nav_link']} href="#languages" onClick={() => setIsMenuOpen(false)}>
          {t('languages')}
          </a>
          <a className={styles['nav_link']} href="#example" onClick={() => setIsMenuOpen(false)}>
          {t('code_example')}
          </a>
          <a className={styles['nav_link']} href="#contact" onClick={() => setIsMenuOpen(false)}>
          {t('contacts')}
          </a>
          <a className={styles['nav_link']} href="#colls" onClick={() => setIsMenuOpen(false)}>
          {t('collaborations')}
          </a>
          <a className={styles['nav_link']} href="#expa" onClick={() => setIsMenuOpen(false)}>
          {t('expa')}
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
