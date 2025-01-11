export interface Project {
    id: number;
    name: string;
    description: string;
    deadline: Date;
    tasks: Task[];
  }
  
  export interface Task {
    id: number;
    projectId: number;
    name: string;
    status: 'Pending' | 'In Progress' | 'Completed';
    dueDate: Date;
  }
  