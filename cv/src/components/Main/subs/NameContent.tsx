import type { ReactElement } from 'react';
import styles from '../Main.module.scss';
import { useTranslation } from 'react-i18next';

function NameContent(): ReactElement {
  const { t } = useTranslation('main')

  return (
    <section className={styles.wrap}>
      <div className={styles.cont}>
        <img className={styles['cont_img']} src="/avatar.jpg" alt="Photo of Anton" />
        <div className={styles['cont_name-cont']}>
          <h1>{t('hero.name')}</h1>
          <div className={styles.br}></div>
          <h3>{t('hero.position')}</h3>
        </div>
      </div>
    </section>
  );
}

export default NameContent;
