import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

interface ProjectImage {
  url: string,
  id: number,
  project: string,
  qty: number
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: []
})
export class ProjectComponent implements OnInit {

  @Input() projectName: string
  @Input() qty: number

  @Output() change = new EventEmitter()

  animal: string

  images: Array<ProjectImage>

  constructor(
  ) { }

  ngOnInit() {
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
