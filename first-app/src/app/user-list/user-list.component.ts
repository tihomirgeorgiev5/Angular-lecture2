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

}
