import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {  MatButtonModule } from '@angular/material/button';



const materialModule = [MatDialogModule,MatFormFieldModule, MatInputModule, MatButtonModule]

@NgModule({
  declarations: [CardComponent, EditTodoComponent],
  imports: [
    CommonModule,FormsModule, ...materialModule
  ],
  exports: [CardComponent]
})
export class SharedModule { }
