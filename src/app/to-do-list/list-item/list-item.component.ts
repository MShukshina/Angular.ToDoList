import {Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() task;
  @Output() taskDelete = new EventEmitter();


  constructor(private viewConteinerref: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  addComponentListItem() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ListItemComponent);
    const componentRef = this.viewConteinerref.createComponent(componentFactory);
  }

  onTaskBtDelete() {
    this.taskDelete.emit();
  }
}
