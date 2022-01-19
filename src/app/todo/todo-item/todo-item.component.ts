import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoComponent } from 'src/app/shared/edit-todo/edit-todo.component';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() iscompleted: EventEmitter<null> = new EventEmitter();
  @Output() tododetail:EventEmitter<Todo> = new EventEmitter();
  @Output() deletetodo:EventEmitter<any> =new EventEmitter();
  statusTodo:boolean;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    console.log(this.todo);
    
  }

  toggleIsCompleted(){
    console.log('toggle is clicked');
  }

  toggleTodo(){
    this.todo.isCompleted = !this.todo.isCompleted
    this.statusTodo = this.todo.isCompleted;
    console.log(this.todo);
    this.iscompleted.emit()
    this.tododetail.emit(this.todo)
  }

  deleteTodo(todo){
    console.log(todo);
    
    this.deletetodo.emit(todo)
  }

  id:number
  title:string
  isCompleted:boolean

  openEditTodo():void{
    const dialogRef = this.dialog.open(EditTodoComponent, {
      width: '40%',
      height: '60%',
      data: {
        id: this.todo.id, 
        title: this.todo.title, 
        isCompleted: this.todo.isCompleted
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.title)
      console.log('The dialog was closed');
      console.log(result);
      this.todo.id = Date.now();
      this.todo.title = result.title;
      this.todo.isCompleted = result.isCompleted
      // this.animal = result;
    });
  }
}
