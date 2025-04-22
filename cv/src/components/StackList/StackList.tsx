import type { ReactElement } from "react";
import styles from './StackList.module.scss'
import StackItem from "../UI/StackItem.tsx/StackItem";
import { SpriteNames } from "../../types/types";

function StackList(): ReactElement {
  return (
    <>
      <div className={styles['btns-wrap']}>
        <button className={styles['btn-active']}>Frontend Development</button>
        <button className={styles.btn}>State Management & Testing</button>
        <button className={styles.btn}>Tools</button>
      </div>
      <div>
        <div>
          <StackItem stackName={SpriteNames.STACK} idSprite="html" stackContent="HTML" />
        </div>
      </div>
    </>
  );
}

export default StackList;