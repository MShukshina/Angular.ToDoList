import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent} from './to-do-list/header/header.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ListItemComponent } from './to-do-list/list-item/list-item.component';
import { AddItemComponent } from './to-do-list/header/add-item/add-item.component';
import {TasksService} from './tasks.service';
import {MymenuComponent} from './mymenu/mymenu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductInformarionComponent } from './product-informarion/product-informarion.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: ProductInformarionComponent},
  { path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoListComponent,
    AddItemComponent,
    ListItemComponent,
    MymenuComponent,
    NotFoundComponent,
    ProductInformarionComponent,
    HomeComponent
  ],
  entryComponents: [],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot((appRoutes))
  ],
  providers: [ TasksService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
