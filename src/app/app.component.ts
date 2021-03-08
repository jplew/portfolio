import { Component } from '@angular/core';
import { ProjectService } from './services/project.service';
import { Project } from './typings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  projects: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
      console.log(this.projects);
    });
  }
}
