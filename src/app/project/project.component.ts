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

  project: Project

  @Input() projectData: Project

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {

    // this.projectService.getProject(1)
    //   .subscribe( project => {
    //     this.project = project
    //     console.log(this.project)
    //   })

    // this.images = this.projectData.images
    // this.data = this.projectData
    // this.slug = this.projectData.slug
    // this.title = this.projectData.title

    // this.images = this.buildImagesObj(this.projectName, this.qty)
  }

  // buildImagesObj(name: string, qty: number): ProjectImage[] {

  //   const imagesArray = []

  //   for (let i = 1; i <= qty; i++) {
  //     const imageObject = <ProjectImage>{};
  //     imageObject.url = '/assets/images/' + name + '-0' + i + '-tn.png'
  //     imageObject.id = i
  //     imageObject.project = this.projectName
  //     imageObject.qty = this.qty
  //     imagesArray.push(imageObject)
  //   }

  //   return imagesArray
  // }

}
