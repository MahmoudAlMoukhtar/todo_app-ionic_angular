import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoItemComponent } from './todos-list/todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,TodosListComponent,TodoItemComponent,TodoFormComponent]
})
export class HomePageModule {}
