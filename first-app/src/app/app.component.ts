import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule],
  
})
export class AppComponent {
  title = 'first-app';

   users = [
    {
      name: 'John',
      age: 21
    },
    {
      name: 'Jane',
      age: 22
      
    },
    {
      name: 'Jim',
      age: 23
    }
    
  ];

}
