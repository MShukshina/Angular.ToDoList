import {Component,  OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Output() tasksChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  clear(taskName) {
    taskName.value = '';
  }

  onTaskChange(name: string) {
    if (name) {
      this.tasksChange.emit(name);
    }
  }

}
