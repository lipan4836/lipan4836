export interface IconProps {
  spriteName: string;
  idSprite: string;
  classes?: string;
}

export interface StackItemProps {
  stackName: string;
  idSprite: string;
  stackContent: string;
}

export enum SpriteNames {
  STACK = 'stack-sprite',
  SOCIAL = 'socials-sprite',
}
