import { IUser } from "./interfaces/user";

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

  constructor() {  }
   

  addNewUserHandler(newUser: IUser): void {
    this.users= this.users.concat(newUser);
    
  }
}
