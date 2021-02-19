import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/Todo';
import { TodosService } from 'src/app/_services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  deleteTodo(deleteDodo: Todo) {
    this.todoService.deleteTodo(deleteDodo);
    this.todos = this.todos.filter(t => t.id != deleteDodo.id);
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  updateTodo(updateTodo: Todo) {
    this.todoService.updateTodo(updateTodo);
  }
}
