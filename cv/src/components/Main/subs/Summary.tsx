import type { ReactElement } from 'react';
import styles from '../Main.module.scss'

function Summary(): ReactElement {
  return (
    <section className={styles.summary} id="#summary">
      <h2>SUMMARY</h2>
      <p>
        A motivated and enthusiastic junior front-end developer with a passion for creating
        intuitive user interfaces. I am driven by the opportunity to work on projects where I can
        see the direct impact of my contributions.
      </p>
      <ul>
        <strong>Key Strength:</strong>
        <li>Rapid learning abilities and strong self-motivation</li>
        <li>Eagerness to tackle new challenges</li>
        <li>Practical approach to development tasks</li>
        <li>Focus on creating user-friendly interfaces</li>
      </ul>
      <p>
        I am committed to continuous learning and growth in the field of front-end development,
        aiming to contribute to the creation of high-quality web solutions.
      </p>
    </section>
  );
}

export default Summary;
