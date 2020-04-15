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

  constructor(private http: HttpClient) {}

  // this get request will take in the todos url and observable from rxjs
  getTodos(): Observable<Todo[]> {
    // this is gonna be in todo type and will be an array
    return this.http.get<Todo[]>(this.todosUrl);
  }
}
