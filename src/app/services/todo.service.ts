import { Injectable } from '@angular/core';
//rxjs is short for reactive extensions which include the observable
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor(private http: HttpClient) {}

  // this get request will take in the todos url and observable from rxjs
  getTodos(): Observable<Todo[]> {
    // this is the get request to the url above AND the limit which is five todos
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
}
