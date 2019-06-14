import { Component } from '@angular/core';
import {ListItemComponent} from './to-do-list/list-item/list-item.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-todo-list';

  tasks = [];

  taskDelete(i) {
    this.tasks.splice(i, 1);
  }
}
