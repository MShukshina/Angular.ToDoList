import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @Input() tasks;

  constructor() {}

  ngOnInit() {}

  public onAddTask(name: string) {
    if (name) {
      this.tasks.push(name);
    }
  }
}
