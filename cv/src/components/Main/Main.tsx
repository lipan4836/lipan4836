import type { ReactElement } from "react";
import styles from './Main.module.scss'
import NameContent from "./subs/NameContent";
import Summary from "./subs/Summary";
import Stack from "./subs/Stack";
import Education from "./subs/Education";
import Languages from "./subs/Languages";
import CodeExample from "./subs/CodeExample";

function Main(): ReactElement {
  return (
    <main className={styles.main}>
      <NameContent />
      <div className={styles['cv-cont']}>
        <Summary />
        <Stack />
        <Education />
        <Languages />
        <CodeExample />
      </div>
    </main>
  );
}

export default Main;