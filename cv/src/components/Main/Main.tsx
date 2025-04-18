import type { ReactElement } from "react";
import styles from './Main.module.scss'
import NameContent from "./subs/NameContent";
import Summary from "./subs/Summary";
import Stack from "./subs/Stack";

function Main(): ReactElement {
  return (
    <main className={styles.main}>
      <NameContent />
      <div className={styles['cv-cont']}>
        <Summary />
        <Stack />
      </div>
    </main>
  );
}

export default Main;