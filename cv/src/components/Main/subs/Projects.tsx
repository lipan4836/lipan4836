import type { ReactElement } from "react";
import type { ProjectsGroupsProps } from "../../../types/types";
import styles from '../Main.module.scss'
import { useTranslation } from "react-i18next";

function Projects(): ReactElement {
  const { t } = useTranslation('main')
  
  const projectsData: ProjectsGroupsProps[] = [
    {
      groupId: 1,
      groupName: `${t('projects.group.vanilla.head')}`,
      projectsProps: [
        {
          id: 1,
          urlDeploy: 'https://lipan4836.github.io/lipan4836-JSFE2023Q4/coffee-house/pages/main/',
          content: `${t('projects.group.vanilla.ch')}`,
        },
        {
          id: 2,
          urlDeploy: 'https://christmas-shop-pt3-lipan4836.netlify.app/pages/gifts/gifts',
          content: `${t('projects.group.vanilla.cs')}`,
        },
        {
          id: 3,
          urlDeploy: 'https://rolling-scopes-school.github.io/lipan4836-JSFEPRESCHOOL2023Q2/audio-player/',
          content: `${t('projects.group.vanilla.ap')}`,
        },
      ]
    },
    {
      groupId: 2,
      groupName: `${t('projects.group.games.head')}`,
      projectsProps: [
        {
          id: 1,
          urlDeploy: 'https://rolling-scopes-school.github.io/lipan4836-JSFEPRESCHOOL2023Q2/random-game/',
          content: `${t('projects.group.games.fyw')}`,
        },
        {
          id: 2,
          urlDeploy: 'https://nonograms-lipan4836.netlify.app/',
          content: `${t('projects.group.games.nngs')}`,
        },
        {
          id: 3,
          urlDeploy: 'https://lipan4836.github.io/lipan4836-JSFE2023Q4/hangman/',
          content: `${t('projects.group.games.hgm')}`,
        },
      ]
    },
    {
      groupId: 3,
      groupName: `${t('projects.group.api.head')}`,
      projectsProps: [
        {
          id: 1,
          urlDeploy: 'https://lipan4836.github.io/lipan4836-JSFE2023Q4/news-api/',
          content: `${t('projects.group.api.news')}`,
        },
        {
          id: 2,
          urlDeploy: 'https://naruto-base-app-state-management.netlify.app/',
          content: `${t('projects.group.api.naruto')}`,
        },
        {
          id: 3,
          urlDeploy: 'Naruto characters base (SPA, TS, React, Redux)',
          content: `${t('projects.group.api.unsplash')}`,
        },
      ]
    },
    {
      groupId: 4,
      groupName: `${t('projects.group.decision.head')}`,
      projectsProps: [
        {
          id: 1,
          urlDeploy: 'https://decision-making-tool-lipan4836.netlify.app/',
          content: `${t('projects.group.decision.vanilla')}`,
          urlCode: 'https://github.com/lipan4836/lipan4836-JSFE2024Q4/tree/decision-making-tool/decision-making-tool',
        },
        {
          id: 2,
          urlDeploy: 'https://easy-decision-vue-lipan4836.netlify.app/',
          content: `${t('projects.group.decision.vue')}`,
          urlCode: 'https://github.com/lipan4836/decision-making-tool/tree/decision-making-tool/vue/decision-making-tool',
        },
        {
          id: 3,
          urlDeploy: 'https://easy-decision-react-lipan4836.netlify.app/',
          content: `${t('projects.group.decision.react')}`,
          urlCode: 'https://github.com/lipan4836/decision-making-tool/tree/decision-making-tool/react/decision-making-tool',
        },
      ]
    },
  ]

  return (
    <section className={styles.projects} id="projects">
      <h2>{t('projects.head')}</h2>
      {
        projectsData.map((group) => (
          <ul key={group.groupId} className={styles['projects-group']}>{group.groupName}
            {group.projectsProps.map((project) => (
              <li key={project.id} className={styles.item}>
                {project.urlCode
                  ? (
                    <>
                      <a href={project.urlCode} target="_blank" rel="noreferrer">{project.content}</a>
                      <span> | </span>
                      <a href={project.urlDeploy} target="_blank" rel="noreferrer">
                        {t('projects.group.decision.deploy')}
                      </a>
                    </>
                  )
                  : <a href={project.urlDeploy} target="_blank" rel="noreferrer">{project.content}</a>}
              </li>
            ))}
          </ul>
        ))
      }
    </section>
  );
}

export default Projects;