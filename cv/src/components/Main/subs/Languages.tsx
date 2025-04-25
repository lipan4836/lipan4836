import type { ReactElement } from "react";
import type { FlagProps } from "../../../types/types";
import Icon from "../../UI/Icon/Icon";
import styles from '../Main.module.scss'

function Languages(): ReactElement {
  const flagsData: FlagProps[] = [
    {
      id: 1,
      flagId: 'flag-ru',
      language: 'Russian',
    },
    {
      id: 2,
      flagId: 'flag-eng',
      language: 'English (B1)',
    },
    {
      id: 3,
      flagId: 'flag-jp',
      language: 'Japanese (beginer)',
    },
  ]

  return (
    <section className={styles.languages}>
      <h2>LANGUAGES</h2>
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