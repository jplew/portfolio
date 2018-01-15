export enum Axis {
  Start = 'start',
  End = 'end'
}

export class Project {
  id: number;
  slug: string;
  title: string;
  url: string;
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
