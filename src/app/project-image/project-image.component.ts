import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProjectImage } from '../project';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-project-image',
  templateUrl: './project-image.component.html',
  styles: []
})
export class ProjectImageComponent implements OnInit {

  @Input() imageData: ProjectImage

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
