import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo;
  //Should be output here to delete todo
  constructor() { }

  ngOnInit(): void {
  }

}
