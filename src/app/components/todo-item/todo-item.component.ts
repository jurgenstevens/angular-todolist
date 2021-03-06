import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/app/models/Todo';

@Component({
  // this will be passed through todos.component.html
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // here is the input property and give it the type Todo like we did with the component
  @Input() todo: Todo;
  // this will emit something out to the parent component <app-todo-item>
  // in todos.component.html
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }
  // this is the even handler for the checkbox
  onToggle(todo) {
    // toggle in UI
    todo.completed = !todo.completed;
    // toggle on server which will return an observable
    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }
  // this is the event handler for the x button
  // we're emmitting up through the @Output above...
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
