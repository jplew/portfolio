import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatChipsModule, MatDialogModule],
  exports: [MatToolbarModule, MatIconModule, MatChipsModule, MatDialogModule],
})
export class MaterialModule {}
