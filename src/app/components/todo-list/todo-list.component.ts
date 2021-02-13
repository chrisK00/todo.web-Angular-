import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/Todo';
import { TodoService } from 'src/app/_services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  deleteTodo(deleteDodo: Todo) {
    this.todoService.deleteTodo(deleteDodo);
    this.todos = this.todos.filter(t => t.id != deleteDodo.id);
  }

  updateTodo(updateTodo: Todo) {
    this.todoService.updateTodo(updateTodo);
  }
}
