import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos:Todo[]
  isCompleted:boolean = false;
  @Output() iscompleted:EventEmitter<any> = new EventEmitter()
  @Output() tododetail:EventEmitter<any> = new EventEmitter()
  @Output() deletetodo:EventEmitter<any> = new EventEmitter()
  todo:Todo
  constructor() { }

  ngOnInit(): void {
    console.log(this.todo);
  }

  toggleIsComplete(){
    this.iscompleted.emit()
    console.log(this.todo);
  }
  getTodo(todo){
    this.todo = todo
    this.tododetail.emit(this.todo)
    this.iscompleted.emit()
    console.log(todo);
  }

  deleteTodo(todo){
    console.log(todo);
    this.deletetodo.emit(todo)
  }

}
