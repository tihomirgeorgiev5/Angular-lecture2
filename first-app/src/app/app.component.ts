import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from "./user-list/user-list.component";
import { IUser } from './interfaces/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, UserListComponent],
  
})
export class AppComponent {
  constructor(public userService: UserService) { }
}


