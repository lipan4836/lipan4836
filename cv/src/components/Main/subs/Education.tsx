import type { ReactElement } from 'react';
import styles from '../Main.module.scss';
import type { CourseProps } from '../../../types/types';

function Education(): ReactElement {
  const coursesData: CourseProps[] = [
    {
      id: 1,
      courseName: 'RSSchool JavaScript / Front-end Course, Pre-school',
      courseLink: 'https://rs.school/courses/javascript-preschool-ru',
      certificate: 'https://app.rs.school/certificate/sy2sclzm',
      position: 193,
      score: 1045,
    },
    {
      id: 2,
      courseName: 'RSSchool JavaScript / Front-end Course',
      courseLink: 'https://rs.school/courses/javascript-ru',
      certificate: 'https://app.rs.school/certificate/rr70czw1',
      position: 207,
      score: 4130,
    },
    {
      id: 3,
      courseName: 'RSSchool React Course',
      courseLink: 'https://rs.school/courses/reactjs',
      certificate: 'https://app.rs.school/certificate/rr70czw1',
      position: 88,
      score: 1049,
    },
  ]

  return (
    <section className={styles.education} id='education'>
      <h2>EDUCATION</h2>
      <div className={styles.content}>
        <a href="https://lspu-lipetsk.ru/" target="_blank" rel="noreferrer">
          Lipetsk State Pedagogical University named after P.P. Semenov-Tyan-Shansky
        </a>
        {coursesData.map((course) => (
          <div className={styles.course} key={course.id}>
          <a href={course.courseLink} target="_blank" rel="noreferrer">
            {course.courseName}
          </a>
          <div className={styles.stats}>
            <p>
              Completed with{' '}
              <a href={course.certificate} target="_blank" rel="noreferrer">
                certificate
              </a>
            </p>
            <p>Position: {course.position}</p>
            <p>Score: {course.score}</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
