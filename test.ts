class Person { 
    constructor(
        public name: string,
        protected age: number
    ) {  }

    setData(newData: { newName: string, newAge: number}) {
        this.age = newData.newAge;
        this.name = newData.newName;    
    }
    getAge() {
        return this.age;
    }
}



const ivan = new Person('Ivan', 25);

ivan.setData({ newAge: 26, newName: 'Ivan' });