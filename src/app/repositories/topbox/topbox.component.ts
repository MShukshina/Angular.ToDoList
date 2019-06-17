import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-topbox',
  templateUrl: './topbox.component.html',
  styleUrls: ['./topbox.component.css']
})
export class TopboxComponent implements OnInit {

  @Output() repositoriesUpdate = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  public onInputChange(inputName: any) {
    const name = inputName.value;
    this.repositoriesUpdate.emit(name);
  }

}
