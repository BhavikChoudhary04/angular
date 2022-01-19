import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';


import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';



const materialModule = [MatInputModule,MatFormFieldModule,MatButtonModule,MatListModule,MatSlideToggleModule,MatDividerModule,MatDialogModule]

@NgModule({
  declarations: [TodoComponent,TodoFooterComponent, TodoHeaderComponent, TodoListComponent, TodoItemComponent],
  imports: [
    CommonModule,FormsModule, ...materialModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
