import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent} from './project/project.component';
import { ProjectImageComponent, ImageDialogComponent  } from './project-image/project-image.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    ImageDialogComponent,
    ProjectImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [
    ImageDialogComponent
  ],  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
