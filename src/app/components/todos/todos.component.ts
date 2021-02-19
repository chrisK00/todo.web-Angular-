import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/Todo';
import { TodosService } from 'src/app/_services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  deleteTodo(deleteDodo: Todo) {
    this.todosService.deleteTodo(deleteDodo);
    this.todos = this.todos.filter(t => t.id != deleteDodo.id);
  }

  replaceTodo(todo: Todo) {
    this.todosService.updateTodo(todo);
  }

  toggleTodoCompleted(todo: Todo) {
    this.todosService.updateTodo(todo);
  }

  addTodo(todo: Todo) {
    this.todosService.addTodo(todo);
  }

  getAllTodos() {
    this.todosService.getTodos().subscribe(todos => this.todos = todos);
  }
}
