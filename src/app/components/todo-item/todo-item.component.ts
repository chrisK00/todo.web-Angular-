import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleTodoCompleted: EventEmitter<Todo> = new EventEmitter();
  //Should be output here to delete todo
  constructor() { }

  ngOnInit(): void {
  }

  toggleCompleted() {
    this.todo.completed = !this.todo.completed;
    this.toggleTodoCompleted.emit();
    //need to change on api aswell
  }


  delete() {
    this.deleteTodo.emit();
  }
}
