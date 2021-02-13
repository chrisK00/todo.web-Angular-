import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../_models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl = environment.apiUrl + 'todo';
  private todoList: Observable<Todo[]> = this.http.get<Todo[]>(this.todosUrl);
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.todoList;
  }

  addTodo(todo: Todo) {
    this.http.post(this.todosUrl, todo).subscribe();
  }

  updateTodo(todo: Todo) {
    this.http.put(this.todosUrl, todo).subscribe();
  }

  deleteTodo(todo: Todo) {
    this.http.delete(this.todosUrl + '/' + todo.id).subscribe();
  }
}

