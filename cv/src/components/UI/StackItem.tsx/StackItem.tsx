import type { ReactElement } from 'react';
import type { StackItemProps } from '../../../types/types';
import Icon from '../Icon/Icon';
import styles from './StackItem.module.scss'

function StackItem({ stackName, idSprite, stackContent }: StackItemProps): ReactElement {
  return (
    <div className={styles['stack-item']}>
      <Icon classes={styles['stack-item_icon']} spriteName={stackName} idSprite={idSprite} />
      <p className={styles['stack-item_content']}>{stackContent}</p>
    </div>
  );
}

export default StackItem;
