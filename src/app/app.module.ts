import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent} from './to-do-list/header/header.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ListItemComponent } from './to-do-list/list-item/list-item.component';
import { AddItemComponent } from './to-do-list/header/add-item/add-item.component';
import { TasksService} from './tasks.service';
import { MymenuComponent} from './mymenu/mymenu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductInformarionComponent } from './product-informarion/product-informarion.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { TopboxComponent } from './repositories/topbox/topbox.component';
import { ContentComponent } from './repositories/content/content.component';
import { FooterComponent } from './repositories/footer/footer.component';
import { ToggleComponent } from './repositories/footer/toggle/toggle.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full'},
  { path: 'todo-list', component: ToDoListComponent},
  { path: 'about', component: ProductInformarionComponent},
  { path: 'github_repositories', component: RepositoriesComponent},
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
    RepositoriesComponent,
    TopboxComponent,
    ContentComponent,
    FooterComponent,
    ToggleComponent
  ],
  entryComponents: [],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot((appRoutes))
  ],
  providers: [ TasksService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
