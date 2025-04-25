import type { ReactElement } from "react";
import type { CollaborationProps } from "../../../types/types";
import styles from '../Main.module.scss'

function Collaborations(): ReactElement {
  const collsList: CollaborationProps[] = [
    {
      id: 1,
      head: 'Tea Shop - shop based on Commercetools',
      urlCode: 'https://github.com/lipan4836/Final-project-RS-CV',
      description: 'Comprehensive e-commerce platform specializing in teas and coffees, featuring user registration, product browsing, filtering, and a fully functional shopping cart system. Built with a responsive design for seamless access across all devices.',
      contributions: [
        'main routing throuhg app',
        'main and cart pages',
        'supply managment on Commercetools side',
      ],
    },
    {
      id: 2,
      head: 'REST/GraphQL Client',
      urlCode: 'https://github.com/lipan4836/graphiql-app',
      urlDeploy: 'https://rss-graphiql-client.netlify.app/',
      description: 'Universal API client supporting both REST and GraphQL requests. The tool enables seamless management of headers, queries, variables, and request bodies, featuring an integrated history functionality for efficient workflow repetition.',
      contributions: [
        'main routing',
        'main page',
        'RESTful-client',
        'design',
      ],
    },
  ]

  return (
    <section className={styles.collaborations}>
      <h2>COLLABORATIONS</h2>
      {collsList.map((coll) => (
        <div className={styles.item} key={coll.id}>
          <a className={styles['item-head']} href={coll.urlCode}>{coll.head}</a>
          <p className={styles['item-disc']}>{coll.description}</p>
          {coll.urlDeploy
            && (<a className={styles['item-deploy']} href={coll.urlDeploy} target="_blank" rel="noreferrer">
              Deploy Link
            </a>)}
          <ul className={styles['item-list']}>My contributions
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