type TODOSTATS = {
    totalTodos:number,
    completeTodos:number,
    incompleteTodos: number
}

export class TodoStats{
    totalTodos:number
    completeTodos:number
    incompleteTodos: number

    constructor(stats:TODOSTATS ={totalTodos:0,completeTodos:0,incompleteTodos:0}){
        this.totalTodos = stats.totalTodos
        this.completeTodos = stats.completeTodos
        this.incompleteTodos = stats.incompleteTodos
    }
}