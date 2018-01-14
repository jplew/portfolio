export class Project {
  id: number;
  name: string;
}

export interface ProjectImage {
  url: string,
  id: number,
  project: string,
  qty: number
}
