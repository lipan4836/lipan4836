import type { ReactElement } from "react";
import type { CollaborationProps } from "../../../types/types";
import styles from '../Main.module.scss'
import { useTranslation } from "react-i18next";

function Collaborations(): ReactElement {
  const { t } = useTranslation('main')
  
  const collsList: CollaborationProps[] = [
    {
      id: 1,
      head: `${t('colls.shop')}`,
      urlCode: 'https://github.com/lipan4836/Final-project-RS-CV',
      description: `${t('colls.shopDisc')}`,
      contributions: [
        `${t('colls.shopList.1')}`,
        `${t('colls.shopList.2')}`,
        `${t('colls.shopList.3')}`,
      ],
    },
    {
      id: 2,
      head: `${t('colls.client')}`,
      urlCode: 'https://github.com/lipan4836/graphiql-app',
      urlDeploy: 'https://rss-graphiql-client.netlify.app/',
      description: `${t('colls.clientDisc')}`,
      contributions: [
        `${t('colls.clientList.1')}`,
        `${t('colls.clientList.2')}`,
        `${t('colls.clientList.3')}`,
        `${t('colls.clientList.4')}`,
      ],
    },
  ]

  return (
    <section className={styles.collaborations} id="colls">
      <h2>{t('colls.head')}</h2>
      {collsList.map((coll) => (
        <div className={styles.item} key={coll.id}>
          <a className={styles['item-head']} href={coll.urlCode} target="_blank" rel="noreferrer">{coll.head}</a>
          <p className={styles['item-disc']}>{coll.description}</p>
          {coll.urlDeploy
            && (<a className={styles['item-deploy']} href={coll.urlDeploy} target="_blank" rel="noreferrer">
              {t('colls.deploy')}
            </a>)}
          <ul className={styles['item-list']}>{t('colls.contributions')}
            {
              coll.contributions.map((contr, index) => (
                <li key={index} className={styles['item-list_item-list']}>
                  {contr}
                </li>
              ))
            }
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Collaborations;