import type { ReactElement } from 'react';
import type { ExperienceProps } from '../../../types/types';
import { useTranslation } from 'react-i18next';
import styles from '../Main.module.scss';

function Experience(): ReactElement {
  const { t } = useTranslation('main');

  const experienceData: ExperienceProps[] = t('expa.data', { returnObjects: true }) as ExperienceProps[];

  return (
    <section className={styles.expa} id="expa">
      <h2>{t('expa.head')}</h2>
      {experienceData.map((project) => (
        <div key={project.id} className="experience-item">
          <h3>{project.title}</h3>
          <h4 className={styles['comp-title']}>{project.position}</h4>
          <p className={styles.date}><em>{project.date}</em></p>
          <ul>
            {project.dutiesList.map((duty) => (
              <li key={duty.dutyId}>{duty.dutyDisc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
