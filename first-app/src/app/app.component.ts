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

  showText = true;
  /* title = 3;

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
      },
   
  ]


  buttonClickHandler() { 
    //this.title++;
    const current = this.title++;

    this.users.push({
      name: `User ${current}`,
      age: current + 20,
    })
  } */
}
