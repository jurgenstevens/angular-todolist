import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  //todos property references Models/Todo.ts
  todos: Todo[];
  // the constructor is used to import services
  constructor() {}

  ngOnInit(): void {}
}
