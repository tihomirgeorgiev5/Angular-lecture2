import { Component, Input, OnInit } from '@angular/core';
import { UserListItemComponent } from "../user-list-item/user-list-item.component";
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  imports: [UserListItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  @Input() userArray: IUser[] = [];


  constructor() { }
 
  ngOnInit(): void {
  }

  addNewUser(userNameInput: HTMLInputElement, userAgeInput: HTMLInputElement) :void {
    const { value: name } = userNameInput;
    const { value: age } = userAgeInput;

    console.log(name, age);

    userNameInput.value = '';
    userAgeInput.value = '';
    
  }

}
