import type { ReactElement} from 'react';
import React, { useEffect, useState } from 'react';
import styles from './LangSwitch.module.scss';
import { useTranslation } from 'react-i18next';

type LangOption = 'ru' | 'en';

const isLangOption = (lang: string): lang is LangOption => {
  return lang === 'ru' || lang === 'en'
}

function LangSwitch(): ReactElement {
  const { i18n } = useTranslation()

  const [currentLang, setCurrentLang] = useState<LangOption>(() => {
    const savedLang = localStorage.getItem('i18nextLng')

    if (savedLang && isLangOption(savedLang)) {
      return savedLang
    }

    if (i18n.language && isLangOption(i18n.language)) {
      return i18n.language;
    }

    return 'ru'
  })

  useEffect(() => {
    const hadleLanguageChanged = (lng: string): void => {
      if (isLangOption(lng)) {
        setCurrentLang(lng);
      }
    }

    i18n.on('languageChanged', hadleLanguageChanged)
    return (): void => {
      i18n.off('languageChanged', hadleLanguageChanged)
    }
  }, [i18n])

  const changeLanguage = (lang: string): void => {
    if (isLangOption(lang)) {
      i18n.changeLanguage(lang).then(() => {
        localStorage.setItem('i18nextLng', lang);
        setCurrentLang(lang);
      });
    } else {
      console.warn(`Unsupported language: ${lang}`);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value

    changeLanguage(newValue);
  }

  return (
    <div className={styles.switcher}>
      <input
        id="toggle-ru"
        className={`${styles.toggle} ${styles.toggleLeft}`}
        name="toggle"
        value="ru"
        type="radio"
        checked={currentLang === 'ru'}
        onChange={handleChange}
      />
      <label htmlFor="toggle-ru" className={styles.btn}>
        ru
      </label>
      
      <input
        id="toggle-en"
        className={`${styles.toggle} ${styles.toggleRight}`}
        name="toggle"
        value="en"
        type="radio"
        checked={currentLang === 'en'}
        onChange={handleChange}
      />
      <label htmlFor="toggle-en" className={styles.btn}>
        en
      </label>
    </div>
  );
}

export default LangSwitch;
