import { NgModule } from '@angular/core'
import {
  // MatButtonModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material'


@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule
    // MatButtonModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule
    // MatButtonModule,
  ],
})
export class MaterialModule { }
