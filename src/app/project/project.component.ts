import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Axis, Project } from '../typings';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: [],
})
export class ProjectComponent implements OnInit {
  project: Project;
  alignment: Axis;

  @Input() projectData: Project;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    if (this.projectData.id % 2 === 0) {
      this.alignment = Axis.End;
    } else {
      this.alignment = Axis.Start;
    }

    this.projectData.images = this.projectData.images.map((image) => {
      const ext = '.png';
      const filename =
        '/assets/images/' + this.projectData.slug + '-0' + image.id;

      const smallUrl = filename + '-tn' + ext;
      const bigUrl = filename + ext;

      return {
        id: image.id,
        caption: image.caption,
        smallUrl: smallUrl,
        bigUrl: bigUrl,
      };
    });
  }
}
