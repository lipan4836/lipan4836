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

export interface CourseProps {
  id: number;
  courseName: string;
  courseLink: string;
  certificate: string;
  position: number;
  score: number;
}

export interface FlagProps {
  id: number;
  flagId: string;
  language: string;
}

export interface ContactProps {
  id: number;
  url: string;
  content: string;
  markId: string;
}