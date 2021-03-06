import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title?: string;

  description?: string;
  @Output() toDoAdd :EventEmitter<todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){
 const todo = {
   title:this.title,
   description:this.description
 } 
 this.toDoAdd.emit(todo)
}
}
