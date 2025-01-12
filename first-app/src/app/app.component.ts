import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserListComponent } from "./user-list/user-list.component";
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, UserListComponent],
  
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

  addNewUserHandler(newUser: IUser): void {
    //this.users= this.users.concat(newUser);
    //this.users.push(newUser);
  }

  constructor() {
    setInterval(() => this.users.push(
      { name: 'JimMorrison',
       age: 23 }
    ), 5000);
}

}
