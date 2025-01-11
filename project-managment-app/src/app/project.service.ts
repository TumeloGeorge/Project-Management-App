import { Injectable } from '@angular/core';
import { Project, Task } from './models';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private	projects: Project[] = [];

  getProjects(): Project[]{
    return this.projects;
  }

  addProject(project: Project): void {
    this.projects.push(project);
  }

  getTasks(projectId: number): Task[] {
    return this.projects.find((p) => p.id === projectId)?.tasks || [];
  }

  addTask(projectId: number, task: Task): void {
    const project = this.projects.find((p) => p.id === projectId);
    project?.tasks.push(task);
  }
  constructor() { }
}
