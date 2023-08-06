import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ITodo } from '../../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent  implements OnInit {
@Input() todo!:ITodo;
@Output() editCheck= new EventEmitter()
  constructor() { }

  ngOnInit() {}

  editCheckboxChecked (id:string){
    this.editCheck.emit()
  }
 
}
