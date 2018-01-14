export class Project {
  id: number;
  slug: string;
  title: string;
  skills: string[];
  images: ProjectImage[];
  blurb: string;
  bullets: string[];
}

export interface ProjectImage {
  id: number,
  caption: string
}
