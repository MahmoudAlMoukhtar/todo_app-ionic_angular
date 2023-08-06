import { Component } from '@angular/core';
import { ITodo } from './todo.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = "test";
  todos:ITodo[] = [];
  filter:string = ""

  constructor() {}
  onClearTodos(){
      this.todos = []
      this.filter = ''
  }
  onAddTodo(){    
    const max = 20;
    const min = 10;
    const randomNum = Math.floor(Math.random() * (max - min + 1) + 10)
      this.todos.push({id:`${randomNum}`,title:`title${randomNum}`,description:`test${randomNum}`,check:false})
  }
  
  getFilteredTodos(){
    if(this.todos.length > 0){

      return this.filter.toLowerCase().trim() ==='' ? this.todos : this.todos.filter((t)=>t.title.toLowerCase().includes(this.filter.toLowerCase().trim()) || t.description.toLowerCase().includes(this.filter.toLowerCase().trim()))
    }else{
      return []
    }
  }

  editTodoCheck(id:string){
    return this.todos.filter((t)=>t.id ==id ? t.check = !t.check : t)
  }
  
}
