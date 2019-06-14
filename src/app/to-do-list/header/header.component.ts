import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
