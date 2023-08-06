import { Component, Input, OnInit } from '@angular/core';
import {ITodo} from '../todo.model'
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})



export class TodosListComponent  implements OnInit {

  @Input() todos!:ITodo[]
  constructor() { }

  ngOnInit() {}



  editTodoCheck(id:string){
    this.todos.filter((t)=>t.id ==id ? t.check = true : t)
    console.log('update')
  }

}
