import { Component } from '@angular/core';

// this decorator it includes metadata for the component like the selector
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Jurgen';
}
