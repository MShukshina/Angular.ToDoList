import { Component, OnInit } from '@angular/core';
import {TasksService} from './tasks.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-todo-list';

  public tasks;
  private serviceTasks;

  constructor(tasksService: TasksService) {
    this.serviceTasks = tasksService;
  }

  ngOnInit() {
    this.tasks = this.serviceTasks.getTasks();
  }

  removeTask(index: number) {
    this.serviceTasks.remove(index);
    this.tasks = this.serviceTasks.getTasks();
  }
  addTask(name: string) {
     this.serviceTasks.add(name);
     this.tasks = this.serviceTasks.getTags();
  }
}
