import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/Todo';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  faCheck = faCheck;
  @Input() todo: Todo = new Todo;
  //Should be output here to delete todo
  constructor() { }

  ngOnInit(): void {
  }

  toggleCompleted() {
    this.todo.completed = !this.todo.completed;
    //need to change on api aswell
  }
}
