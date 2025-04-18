import type { ReactElement } from 'react';
import styles from '../Main.module.scss';

function NameContent(): ReactElement {
  return (
    <div className={styles.wrap}>
      <div className={styles.cont}>
        <img className={styles['cont_img']} src="/avatar.jpg" alt="Photo of Anton" />
        <div className={styles['cont_name-cont']}>
          <h1>ANTON DMITRIEV</h1>
          <div className={styles.br}></div>
          <h3>Junior Front-End Developer</h3>
        </div>
      </div>
    </div>
  );
}

export default NameContent;
