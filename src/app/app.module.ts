import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ListItemComponent } from './to-do-list/list-item/list-item.component';
import { AddItemComponent } from './header/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoListComponent,
    AddItemComponent,
    ListItemComponent
  ],
  entryComponents: [ListItemComponent],

  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
