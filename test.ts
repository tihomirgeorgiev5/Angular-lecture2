enum UserRole {
    Admin,
    Client
}

interface IUserNewData {
    newName: string;
    newAge: number;
}

class Person { 
    constructor(
        public name: string,
        protected age: number,
        public role: UserRole
    ) {  }

    setData(newData: IUserNewData) {
        this.age = newData.newAge;
        this.name = newData.newName;    
    }
    getAge() {
        return this.age;
    }
}



const ivan = new Person('Ivan', 25, UserRole.Admin);

const newData: IUserNewData = { newName: 'Ivan', newAge: 26 };

ivan.setData(newData);

function identity<T>(arg: T): T {
    return arg;
}

const value = 1;
const test = identity(value);
let str = 'vhbjdhgfj';
const test2 = identity(str);
const test3 = UserRole.Client;

if(test3 === ivan.role) {
    console.log('Admin');
}

 