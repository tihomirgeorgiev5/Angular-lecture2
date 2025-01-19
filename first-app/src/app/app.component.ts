import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from "./user-list/user-list.component";
import { UserService } from './user.service';
import { of } from 'rxjs';
/* const p = new Promise((resolve, reject) => {
  setTimeout(() => 
    resolve('Hi, How are you?'), 2000);
});

p.then((value) => console.log(value)); */

Promise.resolve(1000).then(x => x + 1).then(console.log);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, UserListComponent],
  
})
export class AppComponent {
  constructor(public userService: UserService) { }
}


