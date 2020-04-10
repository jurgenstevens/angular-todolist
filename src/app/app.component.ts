import { Component } from '@angular/core';

// this decorator it includes metadata for the component like the selector
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // below, we're using TypeScript
  name: string = 'Jurgen';

  // we can use methods such as constructors which runs on instantiation
  constructor() {
    this.changeName('John');
  }
  //you can create custom methods
  changeName(name: string): void {
    this.name = name;
  }
}
