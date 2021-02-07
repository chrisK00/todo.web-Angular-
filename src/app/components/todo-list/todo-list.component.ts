import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  constructor() { }

  ngOnInit(): void {

  }

}
