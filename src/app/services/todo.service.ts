import { Injectable } from '@angular/core';
//rxjs is short for reactive extensions which include the observable
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor(private http: HttpClient) {}
  // GET TODOS
  // this get request will take in the todos url and observable from rxjs
  getTodos(): Observable<Todo[]> {
    // this is the get request to the url above AND the limit which is five todos
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    // Removes it from the UI
    const url = `${this.todosUrl}/${todo.id}`;
    // Removes it from the server
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  // Toggle Completed
  // this will return an observable with any because it's not formatted as an exact to do since it has a user id
  toggleCompleted(todo: Todo): Observable<any> {
    // this should make the put request
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
