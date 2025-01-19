import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from "./user-list/user-list.component";
import { IUser } from './interfaces/user';
import { UserService } from './user.service';

const p = new Promise((resolve, reject) => {
  setTimeout(() => 
    resolve('Hi, How are you?'), 2000);
});

p.then((value) => console.log(value));


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, UserListComponent],
  
})
export class AppComponent {
  constructor(public userService: UserService) { }
}


