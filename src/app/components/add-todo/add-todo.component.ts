import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/Todo';
import { TodoService } from 'src/app/_services/todo.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todo: Todo = new Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  submit() {
    this.todoService.addTodo(this.todo);
  }
}
