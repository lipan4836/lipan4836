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
      <div className={styles['stack-cont']}>
        <div className={styles.slide}>
          <StackItem stackName={SpriteNames.STACK} idSprite="html" stackContent="HTML" />
          <StackItem stackName={SpriteNames.STACK} idSprite="css" stackContent="CSS" />
          <StackItem stackName={SpriteNames.STACK} idSprite="scss" stackContent="SCSS" />
          <StackItem stackName={SpriteNames.STACK} idSprite="js" stackContent="JavaScript" />
          <StackItem stackName={SpriteNames.STACK} idSprite="typescript" stackContent="TypeScript" />
          <StackItem stackName={SpriteNames.STACK} idSprite="react" stackContent="React" />
          <StackItem stackName={SpriteNames.STACK} idSprite="nextjs" stackContent="NEXT" />
          <StackItem stackName={SpriteNames.STACK} idSprite="vue" stackContent="Vuejs" />
        </div>
        <div className={styles.slide}>
          <StackItem stackName={SpriteNames.STACK} idSprite="redux" stackContent="Redux" />
          <StackItem stackName={SpriteNames.STACK} idSprite="pinia" stackContent="Pinia" />
          <StackItem stackName={SpriteNames.STACK} idSprite="jest" stackContent="Jest" />
          <StackItem stackName={SpriteNames.STACK} idSprite="vitest" stackContent="Vitest" />
        </div>
        <div className={styles.slide}>
          <StackItem stackName={SpriteNames.STACK} idSprite="git" stackContent="Git" />
          <StackItem stackName={SpriteNames.SOCIAL} idSprite="github" stackContent="Github" />
          <StackItem stackName={SpriteNames.STACK} idSprite="eslint" stackContent="EsLint" />
          <StackItem stackName={SpriteNames.STACK} idSprite="prettier" stackContent="Prettier" />
          <StackItem stackName={SpriteNames.STACK} idSprite="husky" stackContent="Husky" />
          <StackItem stackName={SpriteNames.STACK} idSprite="netlify" stackContent="Netlify" />
          <StackItem stackName={SpriteNames.STACK} idSprite="figma" stackContent="Figma" />
        </div>
      </div>
    </>
  );
}

export default StackList;