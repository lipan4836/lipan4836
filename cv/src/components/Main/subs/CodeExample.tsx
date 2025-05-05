import type { ReactElement } from 'react';
import styles from '../Main.module.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTranslation } from 'react-i18next';

function CodeExample(): ReactElement {
  const { t } = useTranslation('main')

  const codeString = `
  function getRandomColor(): string {
    const str = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i += 1) {
      color += str[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }
  
  function generateColorsArray(count: number): string[] {
    const colors: string[] = [];
  
    for (let i = 0; i < count; i += 1) {
      colors.push(getRandomColor());
    }
  
    return colors;
  }
  `;

  return (
    <section className={styles['code-example']} id='example'>
      <h2>{t('codeExample.head')}</h2>
      <SyntaxHighlighter language="typescript" style={tomorrow} customStyle={{ fontSize: '11px', padding: '20px' }}>
        {codeString}
      </SyntaxHighlighter>
    </section>
  );
}

export default CodeExample;
