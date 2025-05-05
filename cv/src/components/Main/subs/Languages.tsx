import type { ReactElement } from "react";
import type { FlagProps } from "../../../types/types";
import Icon from "../../UI/Icon/Icon";
import styles from '../Main.module.scss'
import { useTranslation } from "react-i18next";

function Languages(): ReactElement {
  const { t } = useTranslation('main')
  
  const flagsData: FlagProps[] = [
    {
      id: 1,
      flagId: 'flag-ru',
      language: `${t('languages.ru')}`,
    },
    {
      id: 2,
      flagId: 'flag-eng',
      language: `${t('languages.en')}`,
    },
    {
      id: 3,
      flagId: 'flag-jp',
      language: `${t('languages.jp')}`,
    },
  ]

  return (
    <section className={styles.languages} id="languages">
      <h2>{t('languages.head')}</h2>
      <div className={styles.content}>
        {flagsData.map((flagData) => (
          <div key={flagData.id} className={styles['lang-cont']}>
            <Icon spriteName="flags-sprite" idSprite={flagData.flagId} />
            <p>{flagData.language}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;