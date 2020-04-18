import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  // the output must be declared
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  // title input
  title: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false,
    };
    // we need to emit this upwards
    this.addTodo.emit(todo);
  }
}
