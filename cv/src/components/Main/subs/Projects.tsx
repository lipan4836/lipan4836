import type { ReactElement } from "react";
import type { ProjectsGroupsProps } from "../../../types/types";
import styles from '../Main.module.scss'

function Projects(): ReactElement {
  const projectsData: ProjectsGroupsProps[] = [
    {
      groupId: 1,
      groupName: 'Vanila JS',
      projectsProps: [
        {
          id: 1,
          urlDeploy: 'https://lipan4836.github.io/lipan4836-JSFE2023Q4/coffee-house/pages/main/',
          content: 'Coffee house',
        },
        {
          id: 2,
          urlDeploy: 'https://christmas-shop-pt3-lipan4836.netlify.app/pages/gifts/gifts',
          content: 'Christmas Shop',
        },
        {
          id: 3,
          urlDeploy: 'https://rolling-scopes-school.github.io/lipan4836-JSFEPRESCHOOL2023Q2/audio-player/',
          content: 'Audio Player',
        },
      ]
    },
    {
      groupId: 2,
      groupName: 'Games',
      projectsProps: [
        {
          id: 1,
          urlDeploy: 'https://rolling-scopes-school.github.io/lipan4836-JSFEPRESCHOOL2023Q2/random-game/',
          content: 'Find your Waifu',
        },
        {
          id: 2,
          urlDeploy: 'https://nonograms-lipan4836.netlify.app/',
          content: 'Nonograms',
        },
        {
          id: 3,
          urlDeploy: 'https://lipan4836.github.io/lipan4836-JSFE2023Q4/hangman/',
          content: 'Hangman',
        },
      ]
    },
    {
      groupId: 3,
      groupName: 'API Inegration',
      projectsProps: [
        {
          id: 1,
          urlDeploy: 'https://lipan4836.github.io/lipan4836-JSFE2023Q4/news-api/',
          content: 'News (SPA, TS)',
        },
        {
          id: 2,
          urlDeploy: 'https://naruto-base-app-state-management.netlify.app/',
          content: 'Naruto characters base (SPA, TS, React, Redux)',
        },
        {
          id: 3,
          urlDeploy: 'Naruto characters base (SPA, TS, React, Redux)',
          content: 'Image finder Unsplash (JS)',
        },
      ]
    },
    {
      groupId: 4,
      groupName: 'Decision Making Tool',
      projectsProps: [
        {
          id: 1,
          urlDeploy: 'https://decision-making-tool-lipan4836.netlify.app/',
          content: 'Native TS, SPA (code)',
          urlCode: 'https://github.com/lipan4836/lipan4836-JSFE2024Q4/tree/decision-making-tool/decision-making-tool',
        },
        {
          id: 2,
          urlDeploy: 'https://easy-decision-vue-lipan4836.netlify.app/',
          content: 'Vue, Pinia, SPA (code)',
          urlCode: 'https://github.com/lipan4836/decision-making-tool/tree/decision-making-tool/vue/decision-making-tool',
        },
        {
          id: 3,
          urlDeploy: 'https://easy-decision-react-lipan4836.netlify.app/',
          content: 'React, Zustand, SPA (code)',
          urlCode: 'https://github.com/lipan4836/decision-making-tool/tree/decision-making-tool/react/decision-making-tool',
        },
      ]
    },
  ]

  return (
    <section className={styles.projects}>
      <h2>PROJECTS</h2>
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
                      <a href={project.urlDeploy} target="_blank" rel="noreferrer">Deploy</a>
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