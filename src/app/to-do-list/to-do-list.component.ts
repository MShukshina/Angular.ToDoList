import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TasksService} from '../tasks.service';
import {Task} from '../task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  public tasks: Task[];
  constructor(private serviceTasks: TasksService) {
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
    this.tasks = this.serviceTasks.getTasks();
  }

}
