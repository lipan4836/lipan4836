import type { ReactElement} from 'react';
import React, { useState } from 'react';
import styles from './LangSwitch.module.scss';

type LangOption = 'ru' | 'eng';

function LangSwitch(): ReactElement {
  const [value, setValue] = useState<LangOption>('eng')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value

    if (newValue === 'ru' || newValue === 'eng') setValue(newValue)
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
      />
      <label htmlFor="toggle-on" className={styles.btn}>
        ru
      </label>
      
      <input
        id="toggle-off"
        className={`${styles.toggle} ${styles.toggleRight}`}
        name="toggle"
        value="eng"
        type="radio"
        checked={value === 'eng'}
        onChange={handleChange}
      />
      <label htmlFor="toggle-off" className={styles.btn}>
        eng
      </label>
    </div>
  );
}

export default LangSwitch;
