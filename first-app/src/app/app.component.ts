import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from "./user-list/user-list.component";
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, UserListComponent],
  
})
export class AppComponent {
addNewUserHandler($event: IUser) {
throw new Error('Method not implemented.');
}
  title = 'first-app';
  users!: IUser[];

}


