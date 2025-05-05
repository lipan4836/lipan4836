import type { ReactElement } from 'react';
import styles from '../Main.module.scss'
import { useTranslation } from 'react-i18next';

function Summary(): ReactElement {
  const { t } = useTranslation('main')

  return (
    <section className={styles.summary} id="summary">
      <h2>{t('summary.head')}</h2>
      <p>{t('summary.chap1')}</p>
      <ul>
        <strong>{t('summary.listHead')}</strong>
        <li>{t('summary.list.first')}</li>
        <li>{t('summary.list.second')}</li>
        <li>{t('summary.list.third')}</li>
        <li>{t('summary.list.fourth')}</li>
      </ul>
      <p>{t('summary.chap2')}</p>
    </section>
  );
}

export default Summary;
