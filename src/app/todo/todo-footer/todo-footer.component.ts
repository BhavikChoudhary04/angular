import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoStats } from '../models/todostats';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  @Input() todosleft:number;
  @Input() stats:TodoStats 
  @Output() createnewTodo:EventEmitter<null> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  createTodo(){
    this.createnewTodo.emit()
  }

}
