import type { ReactElement } from "react";
import styles from '../Main.module.scss'
import StackList from "../../StackList/StackList";
import { useTranslation } from "react-i18next";

function Stack(): ReactElement {
  const { t } = useTranslation('main')
  
  return (
    <section className={styles.stack} id="stack">
      <h2>{t('stack.head')}</h2>
      <StackList />
    </section>
  );
}

export default Stack;