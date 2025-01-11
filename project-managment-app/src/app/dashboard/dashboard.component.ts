import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }

  addProject(): void{
    const newProject: Project = {
      id: Date.now(),
      name: `Project ${this.projects.length + 1}`,
      description: `This is project ${this.projects.length + 1} description`,
      deadline: new Date(),
      tasks: [],
    };

    this.projectService.addProject(newProject);
  }

  viewProject(projectId: number): void{
    // Navigate to be implemented
  }
}
