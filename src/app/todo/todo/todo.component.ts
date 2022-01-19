import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoStats } from '../models/todostats';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public title:string = 'Todos'
  public newTodo:Todo = new Todo()
  public todos:Todo[] = []
  public showFooter:boolean = false;
  public stats:TodoStats = new TodoStats();
  public isCompleted:boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.stats);
  }

  onCreateNewTodo(){
    this.todos.push(this.newTodo)
    this.calStats()
    console.log(this.todos);
    this.newTodo = new Todo();
  }

  calStats(){
    this.stats = new TodoStats()
    this.stats.totalTodos = this.todos.length
    this.todos.forEach((todo)=>{
      if (todo.isCompleted){
        this.stats.completeTodos++
      }
    })
    this.stats.incompleteTodos = this.todos.length - this.stats.completeTodos
  }

  toggleIsComplete(){
    this.newTodo.isCompleted = !this.newTodo.isCompleted
    console.log(this.newTodo.isCompleted);
    
  }

  getTodo(newtodo){
    console.log('todo:',newtodo);
   
    this.todos.find(todo => todo.id ===  newtodo.id).isCompleted = newtodo.isCompleted
    console.log(this.todos);

    if (newtodo.isCompleted){
      this.stats.completeTodos++
      this.stats.incompleteTodos--
    } else if (!newtodo.isCompleted){
      this.stats.completeTodos--
      this.stats.incompleteTodos++
    }
    
  }

  deleteTodo(newtodo){
    console.log(newtodo);
    let indexOfTodo = this.todos.findIndex(todo => todo.id === newtodo.id) 
    this.todos.splice(indexOfTodo,1)
    console.log();
    this.stats.totalTodos--
    if (newtodo.isCompleted){
      this.stats.completeTodos--
    } else if (!newtodo.isCompleted){
      this.stats.incompleteTodos--
    }
    
  }
}
