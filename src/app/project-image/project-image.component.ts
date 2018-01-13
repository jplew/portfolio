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
  @Input() imageId: string

  _bigImageUrl: string
  _imageWidth: number
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
        bigImageUrl: this.getBigImageUrl(),
        imageHeight: window.innerHeight - 300 + 'px',
      },
      width: this.getWidth(this._bigImageUrl) + 'px',
      height: window.innerHeight - 200 + 'px',
    }
    console.log(config.width)
    return config
  }

  getWidth(url) {
    const imgObject = new Image();
    imgObject.src = url;

    const natWidth = imgObject.addEventListener('load', function() {
      const width = this.naturalWidth;
      const natHeight = this.naturalHeight;
      return width
    })

    return natWidth
  }

  openDialog(event): void {
    this.change.emit({ id: 'howdy' })
    console.log(event)

    const dialogRef = this.dialog.open(ImageDialogComponent, this.getConfig())

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      this.animal = result
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

  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.imageUrl = this.data.bigImageUrl
    this.imageHeight = this.data.imageHeight

  }

  onNoClick(): void {
    this.dialogRef.close()
  }
}
