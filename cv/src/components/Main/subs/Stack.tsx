import type { ReactElement } from "react";
import styles from '../Main.module.scss'
import StackList from "../../StackList/StackList";

function Stack(): ReactElement {
  return (
    <section className={styles.stack} id="stack">
      <h2>STACK</h2>
      <StackList />
    </section>
  );
}

export default Stack;