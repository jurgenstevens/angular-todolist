import { Component, OnInit } from '@angular/core';

@Component({
  // this will be passed through todos.component.html
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
