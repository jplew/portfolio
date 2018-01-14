import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-project-image',
  templateUrl: './project-image.component.html',
  styles: []
})
export class ProjectImageComponent implements OnInit {

  @Output() change = new EventEmitter()

  @Input() imageUrl: string
  @Input() projectName: string
  @Input() imageId: number
  @Input() quantity: number

  _bigImageUrl: string
  _imageHeight: number

  animal: string

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  getBigImageUrl(): string {
    this._bigImageUrl = this.imageUrl.slice(0, -7) + '.png'
    return this._bigImageUrl
  }

  getConfig() {
    const config = {
      data: {
        imageId: this.imageId,
        projectName: this.projectName,
        bigImageUrl: this.getBigImageUrl(),
        imageHeight: window.innerHeight - 220 + 'px',
        quantity: this.quantity
      },
      height: window.innerHeight - 80 + 'px',
    }
    return config
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, this.getConfig())

    dialogRef.afterClosed().subscribe(result => {
    })
  }

}

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
