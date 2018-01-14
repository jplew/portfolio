import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { catchError, map, tap } from 'rxjs/operators'
import { Project } from '../project'

@Injectable()
export class ProjectService {

  projectsUrl = 'api/projects'

  constructor(
    private http: HttpClient,
  ) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl)
  }

  getProject(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/${id}`
    return this.http.get<Project>(url)
  }

}