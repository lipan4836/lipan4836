import type { ReactElement } from "react";
import styles from '../Main.module.scss'

function Stack(): ReactElement {
  return (
    <div className={styles.stack} id="stack">
      <h2>STACK</h2>
    </div>
  );
}

export default Stack;