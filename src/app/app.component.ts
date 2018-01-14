import { Component } from '@angular/core'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProjectService } from './services/project.service';
import { Project } from './project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projects: Project[]

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectService.getProjects()
      .subscribe( projects => {
        this.projects = projects
        console.log(this.projects)
      })
  }

}
