import {Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewContainerRef} from '@angular/core';
import {ListItemComponent} from './list-item/list-item.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Input() tasks;
  @Output() taskDelete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {}

  onTaskDelete(i) {
    this.taskDelete.emit(i);
  }

}
