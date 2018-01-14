import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-image-dialog',
  templateUrl: 'image-dialog.component.html',
})
export class ImageDialogComponent implements OnInit {

  imageUrl: string
  imageId: number
  caption: string

  imagesCurrent: number
  imagesTotal: number

  imageHeight: string

  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService
  ) {
    this.imageId = this.data.imageData.id - 1
    console.log(this.imageId)
    this.caption = this.data.imageData.caption
    this.imageUrl = this.data.imageData.bigUrl
    this.imageHeight = this.data.imageHeight
    this.imagesCurrent = this.imageId + 1
    this.imagesTotal = this.data.projectData.images.length
  }

  ngOnInit(): void {
    console.log(this.data.projectData)
    console.log(this.data.imageData)
  }

  imagePrevious() {
    this.imageId--
    if (this.imageId < 0) {
      this.imageId = this.data.projectData.images.length - 1
    }
    this.setDialogVars()
  }

  imageNext() {
    this.imageId++
    if (this.imageId >= this.data.projectData.images.length) {
      this.imageId = 0
    }
    this.setDialogVars()
    // this.dialogRef.updateSize('500px', '500px')
  }
  setDialogVars() {
    console.log(this.imageId)
    this.caption = this.data.projectData.images[this.imageId].caption
    this.imageUrl = this.data.projectData.images[this.imageId].bigUrl
    this.imagesCurrent = this.imageId + 1
  }

}
