import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})

export class TodoFormComponent  implements OnInit {

@Output() addTodo= new EventEmitter()
@Output() clearTodos= new EventEmitter()
  constructor() { }

  ngOnInit() {}

  addTodoButtonClicked (){
    this.addTodo.emit()
  }

  clearTodosButtonClicked (){
    this.clearTodos.emit()
  }
}
