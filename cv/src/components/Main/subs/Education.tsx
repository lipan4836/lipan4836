import type { ReactElement } from 'react';
import styles from '../Main.module.scss';
import type { CourseProps } from '../../../types/types';
import { useTranslation } from 'react-i18next';

function Education(): ReactElement {
  const { t } = useTranslation('main')

  const coursesData: CourseProps[] = [
    {
      id: 1,
      courseName: `${t('education.rsPre')}`,
      courseLink: 'https://rs.school/courses/javascript-preschool-ru',
      certificate: 'https://app.rs.school/certificate/sy2sclzm',
      position: 193,
      score: 1045,
    },
    {
      id: 2,
      courseName: `${t('education.rsJS')}`,
      courseLink: 'https://rs.school/courses/javascript-ru',
      certificate: 'https://app.rs.school/certificate/rr70czw1',
      position: 207,
      score: 4130,
    },
    {
      id: 3,
      courseName: `${t('education.rsR')}`,
      courseLink: 'https://rs.school/courses/reactjs',
      certificate: 'https://app.rs.school/certificate/rr70czw1',
      position: 88,
      score: 1049,
    },
  ]

  return (
    <section className={styles.education} id='education'>
      <h2>{t('education.head')}</h2>
      <div className={styles.content}>
        <a href="https://lspu-lipetsk.ru/" target="_blank" rel="noreferrer">
        {t('education.lgpu')}
        </a>
        {coursesData.map((course) => (
          <div className={styles.course} key={course.id}>
          <a href={course.courseLink} target="_blank" rel="noreferrer">
            {course.courseName}
          </a>
          <div className={styles.stats}>
            <p>
              {t('education.complete')}{' '}
              <a href={course.certificate} target="_blank" rel="noreferrer">
                {t('education.cert')}
              </a>
            </p>
            <p>{t('education.pos')} {course.position}</p>
            <p>{t('education.score')} {course.score}</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
