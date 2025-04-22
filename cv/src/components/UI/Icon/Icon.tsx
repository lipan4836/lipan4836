import type { ReactElement } from "react";
import type { IconProps } from "../../../types/types";

function Icon({spriteName, idSprite, classes}: IconProps): ReactElement {
  return (
    <svg
      className={classes ? classes : ''}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <use xlinkHref={`/${spriteName}.svg#${idSprite}`} />
    </svg>
  );
}

export default Icon;