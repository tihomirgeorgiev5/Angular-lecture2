import { Inject, Injectable } from "@angular/core";
import { myStringInjectionToken } from "./app.config";
import { IUser } from "./interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  constructor(@Inject(myStringInjectionToken) myString: string ) {
    console.log(myString);
    }
   

  addNewUserHandler(newUser: IUser): void {
    this.users= this.users.concat(newUser);
    
  }
}
