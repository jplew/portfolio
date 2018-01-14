import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent} from './project/project.component';
import { ProjectImageComponent, ImageDialogComponent  } from './project-image/project-image.component'

import { InMemoryDataService } from './services/in-memory-data.service';
import { ProjectService } from './services/project.service';

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
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  entryComponents: [
    ImageDialogComponent
  ],
  providers: [
    InMemoryDataService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
