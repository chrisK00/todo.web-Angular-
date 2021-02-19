import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../_models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosUrl = environment.apiUrl + 'todos';
  //private todoList: Observable<Todo[]> = this.http.get<Todo[]>(this.todosUrl);
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  addTodo(todo: Todo) {
    this.http.post(this.todosUrl, todo).subscribe();
    this.reload();
  }

  updateTodo(todo: Todo) {
    this.http.patch(`${this.todosUrl}/${todo.id}`, todo).subscribe();
  }

  replaceTodo(todo: Todo) {
    this.http.put(`${this.todosUrl}/${todo.id}`, todo).subscribe();
  }

  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }

  deleteTodo(todo: Todo) {
    this.http.delete(`${this.todosUrl}/${todo.id}`).subscribe();
  }
}

