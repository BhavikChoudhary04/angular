import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  @Input('title') title:string
  @Input('newTodo') newTodo:Todo
  @Output('createTodo') createNewTodo:EventEmitter<null> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUpEnter(){
    this.newTodo.id = Date.now()
    console.log(this.newTodo);
    this.createNewTodo.emit()
  }


}
