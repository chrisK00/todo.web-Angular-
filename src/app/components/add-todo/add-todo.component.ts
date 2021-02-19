import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/_models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  todo: Todo = new Todo;
  form: any;
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.addTodo.emit(this.todo);
  }
}
