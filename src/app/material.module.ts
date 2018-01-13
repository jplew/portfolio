import { NgModule } from '@angular/core'
import {
  // MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatChipsModule,
  MatDialogModule
} from '@angular/material'


@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule
    // MatButtonModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule
    // MatButtonModule,
  ],
})
export class MaterialModule { }
