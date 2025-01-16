import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserListItemComponent } from "../user-list-item/user-list-item.component";
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  imports: [UserListItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  @Input() userArray: IUser[] = [];
  @Output() addUser = new EventEmitter<IUser>();


  constructor() { 
    console.log(this.userArray);
    
   }
 
  ngOnInit(): void {
    console.log(this.userArray);
   
  }

  ngOnChanges(simpleChanges:SimpleChanges): void {
    console.log(simpleChanges);
    
  }

  addNewUser(userNameInput: HTMLInputElement, userAgeInput: HTMLInputElement) :void {
    const { value: name } = userNameInput;
    const { valueAsNumber: age } = userAgeInput;

    

    this.addUser.emit({name, age});

    console.log(name, age);
 
    userNameInput.value = '';
    userAgeInput.value = '';
    
  }

}
