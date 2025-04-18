import type { ReactElement } from 'react';
import type { StackItemProps } from '../../../types/types';
import Icon from '../Icon/Icon';

function StackItem({ stackName, idSprite, stackContent }: StackItemProps): ReactElement {
  return (
    <div>
      <Icon spriteName={stackName} idSprite={idSprite} />
      <p>{stackContent}</p>
    </div>
  );
}

export default StackItem;
