import type { ReactElement} from 'react';
import React, { useState } from 'react';
import styles from './LangSwitch.module.scss';
import { useTranslation } from 'react-i18next';

type LangOption = 'ru' | 'en';

function LangSwitch(): ReactElement {
  const { i18n } = useTranslation()
  const [value, setValue] = useState<LangOption>('en')

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang)
    localStorage.setItem('i18nextLng', lang);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value

    if (newValue === 'ru' || newValue === 'en') setValue(newValue)
  }

  return (
    <div className={styles.switcher}>
      <input
        id="toggle-on"
        className={`${styles.toggle} ${styles.toggleLeft}`}
        name="toggle"
        value="ru"
        type="radio"
        checked={value === 'ru'}
        onChange={handleChange}
        onClick={() => changeLanguage('ru')}
      />
      <label htmlFor="toggle-on" className={styles.btn}>
        ru
      </label>
      
      <input
        id="toggle-off"
        className={`${styles.toggle} ${styles.toggleRight}`}
        name="toggle"
        value="en"
        type="radio"
        checked={value === 'en'}
        onChange={handleChange}
        onClick={() => changeLanguage('en')}
      />
      <label htmlFor="toggle-off" className={styles.btn}>
        en
      </label>
    </div>
  );
}

export default LangSwitch;
