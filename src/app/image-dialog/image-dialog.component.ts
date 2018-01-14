import { Component, Inject } from '@angular/core'
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-image-dialog',
  templateUrl: 'image-dialog.component.html',
})
export class ImageDialogComponent {

  imageUrl: string
  imageHeight: string
  imageId: number
  projectName: string
  quantity: number

  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.imageUrl = this.data.bigImageUrl
    this.imageHeight = this.data.imageHeight
    this.imageId = this.data.imageId
    this.projectName = this.data.projectName
    this.quantity = this.data.quantity
  }

  imagePrevious() {
    this.imageId--
    if (this.imageId <= 0) {
      this.imageId = this.quantity
    }
    this.imageUrl = '/assets/images/' + this.projectName + '-0' + this.imageId + '.png'
  }

  imageNext() {
    this.imageId++
    if (this.imageId >= this.quantity) {
      this.imageId = 1
    }
    this.imageUrl = '/assets/images/' + this.projectName + '-0' + this.imageId + '.png'
    // this.dialogRef.updateSize('500px', '500px')
  }

}
