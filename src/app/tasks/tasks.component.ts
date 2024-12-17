import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;
  // // private taskService = new TasksService();\
  // private taskService: TasksService;

  // // Dependency Injection
  // constructor(taskService: TasksService) {
  //   this.taskService = taskService
  // }

  // this is the short-cut that's offered by TypeScript adding the keywords like (private / public) in front of the parameter automatically makes the property of this class.
  // ! Private: The property is only accessible from inside this class.
  // ! Public: The property is also accessible from outside this class (e.g., from inside the template). 
  constructor(private taskService: TasksService){}

  get selectedUserTasks() {
     return this.taskService.getUserTasks(this.userId)
  }

  onAddTaskClick(){
    this.isAddingTask = true
  }

  handleClose(){
    this.isAddingTask = false
  }
}
