import { Injectable } from '@angular/core';
//rxjs is short for reactive extensions which include the observable
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo> {
    // this is gonna be in todo type and will be an array
    this.http.get<Todo[]>(todosUrl);
  }
}
