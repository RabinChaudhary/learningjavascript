class Person {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }

    getName = () =>{
        return this.name;
    }
    getAge = () =>{
        return this.age;
    }
    
}

class House{
    constructor ( address, price, residents){
        this.address=address;
        this.price=price;
        this.residents=residents;

    }

    getAddress = () =>{
        return this.address;
    }
    getPrice = () =>{
        return this.price;
    }
    getResident = () =>{
        return this.resident;
    }

    addResidents = (resident) =>{
        this.residents.push(resident);
    }
}

//inheritance
class Programmer extends Person{
    constructor(name, age, company, salary, language){
        super(name, age)
        this.company=company;
        this.salary=salary;
        this.language=language;
    }

    greet = () =>{
        return `Hello, I am a programmer. My name is ${this.getName()}. I am ${this.getAge()}. I work for ${this.company}.`
    }
}

let programmer = new Programmer("Rabin",23,"Twitch", 60000,"Javascript")
console.log(programmer.greet())

//polymorphism


