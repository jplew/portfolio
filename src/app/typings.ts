export enum Axis {
  Start = 'start',
  End = 'end'
}

export enum Direction {
  Left = 'left',
  Right = 'right'
}

export class Project {
  id: number;
  direction?: Direction = Direction.Left;
  slug: string;
  title: string;
  skills: string[];
  images: ProjectImage[];
  blurb: string;
  bullets: string[];
}

export interface ProjectImage {
  id: number,
  caption: string,
  smallUrl?: string,
  bigUrl?: string
}
