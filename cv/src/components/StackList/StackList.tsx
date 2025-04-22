import { useState, type ReactElement } from "react";
import styles from './StackList.module.scss'
import StackItem from "../UI/StackItem.tsx/StackItem";
import { SpriteNames } from "../../types/types";

function StackList(): ReactElement {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [animationClass, setAnimationClass] = useState('');

  const tabs = [
    {
      name: "Frontend Development",
      content: (
        <>
          <StackItem stackName={SpriteNames.STACK} idSprite="html" stackContent="HTML" />
          <StackItem stackName={SpriteNames.STACK} idSprite="css" stackContent="CSS" />
          <StackItem stackName={SpriteNames.STACK} idSprite="scss" stackContent="SCSS" />
          <StackItem stackName={SpriteNames.STACK} idSprite="js" stackContent="JavaScript" />
          <StackItem stackName={SpriteNames.STACK} idSprite="typescript" stackContent="TypeScript" />
          <StackItem stackName={SpriteNames.STACK} idSprite="react" stackContent="React" />
          <StackItem stackName={SpriteNames.STACK} idSprite="nextjs" stackContent="NEXT" />
          <StackItem stackName={SpriteNames.STACK} idSprite="vue" stackContent="Vuejs" />
        </>
      )
    },
    {
      name: "State Management & Testing",
      content: (
        <>
          <StackItem stackName={SpriteNames.STACK} idSprite="redux" stackContent="Redux" />
          <StackItem stackName={SpriteNames.STACK} idSprite="pinia" stackContent="Pinia" />
          <StackItem stackName={SpriteNames.STACK} idSprite="jest" stackContent="Jest" />
          <StackItem stackName={SpriteNames.STACK} idSprite="vitest" stackContent="Vitest" />
        </>
      )
    },
    {
      name: "Tools",
      content: (
        <>
          <StackItem stackName={SpriteNames.STACK} idSprite="git" stackContent="Git" />
          <StackItem stackName={SpriteNames.SOCIAL} idSprite="github" stackContent="Github" />
          <StackItem stackName={SpriteNames.STACK} idSprite="eslint" stackContent="EsLint" />
          <StackItem stackName={SpriteNames.STACK} idSprite="prettier" stackContent="Prettier" />
          <StackItem stackName={SpriteNames.STACK} idSprite="husky" stackContent="Husky" />
          <StackItem stackName={SpriteNames.STACK} idSprite="netlify" stackContent="Netlify" />
          <StackItem stackName={SpriteNames.STACK} idSprite="figma" stackContent="Figma" />
        </>
      )
    },
  ];

  const handleTabChange = (index: number): void => {
    setAnimationClass(styles['slide-out'])
    setTimeout(() => {
      setActiveTab(index)
      setAnimationClass(styles['slide-in'])
      setTimeout(() => setAnimationClass(''), 300)
    }, 300)
  }

  return (
    <>
      <div className={styles['btns-wrap']}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? styles['btn-active'] : styles.btn}
            onClick={() => handleTabChange(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className={styles['stack-cont']}>
        <div className={`${styles.slide} ${animationClass}`}>
          {tabs[activeTab].content}
        </div>
      </div>
      <div className={styles.dots}>
        {tabs.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === activeTab ? styles['dot-active'] : ''}`}
            onClick={() => handleTabChange(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default StackList;