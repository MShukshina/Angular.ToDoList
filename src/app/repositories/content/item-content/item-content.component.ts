import {Component, Input, OnInit} from '@angular/core';
import {Repositories} from '../../../Repositories';

@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.css']
})
export class ItemContentComponent implements OnInit {

  @Input() repository: Repositories;
  constructor() { }

  ngOnInit() {
  }

}
