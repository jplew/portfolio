import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectImage, Project } from '../typings';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-project-image',
  templateUrl: './project-image.component.html',
  styles: [],
})
export class ProjectImageComponent implements OnInit {
  @Input() imageData: ProjectImage;
  @Input() projectData: Project;

  imageUrl: string;
  imageCaption: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.imageUrl = this.imageData.smallUrl;
    this.imageCaption = this.imageData.caption;
  }

  getConfig() {
    const config = {
      data: {
        imageData: this.imageData,
        projectData: this.projectData,
        imageHeight: window.innerHeight - 250 + 'px',
      },
      height: window.innerHeight - 80 + 'px',
    };
    return config;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, this.getConfig());

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
