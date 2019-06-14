import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Output() taskDelete = new EventEmitter<number>();

  public tasks;
  constructor(private serviceTasks: TasksService) {
  }

  ngOnInit() {
    this.tasks = this.serviceTasks.getTasks();
  }

  onTaskDelete(i: number) {
    this.taskDelete.emit(i);
  }

}
