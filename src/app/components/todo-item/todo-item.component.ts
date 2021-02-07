import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // declare with todo type? make class?
  @Input() todo: Todo = {};

  constructor() { }

  ngOnInit(): void {
  }

}
