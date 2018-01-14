import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { ProjectService } from '../services/project.service';
import { Project, ProjectImage } from '../project'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: []
})
export class ProjectComponent implements OnInit {

  projects: Project[]

  @Input() projectName: string
  @Input() qty: number

  @Output() change = new EventEmitter()

  animal: string

  images: Array<ProjectImage>

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectService.getProjects()
      .subscribe( projects => {
        this.projects = projects
        console.log(this.projects)
      })

    this.images = this.buildImagesObj(this.projectName, this.qty)
  }

  buildImagesObj(name: string, qty: number): ProjectImage[] {

    const imagesArray = []

    for (let i = 1; i <= qty; i++) {
      const imageObject = <ProjectImage>{};
      imageObject.url = '/assets/images/' + name + '-0' + i + '-tn.png'
      imageObject.id = i
      imageObject.project = this.projectName
      imageObject.qty = this.qty
      imagesArray.push(imageObject)
    }

    return imagesArray
  }

}
