import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() taskAdd = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public onTaskAdd(name: string) {
      this.taskAdd.emit(name);
  }
}
