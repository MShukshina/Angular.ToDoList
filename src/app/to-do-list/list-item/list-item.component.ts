import {Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewContainerRef} from '@angular/core';
import {Task} from '../../task';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() task: Task;
  @Output() taskDelete = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onTaskBtDelete() {
    this.taskDelete.emit();
  }
}
