// Arrow Function



// let age;
// const DoSomething = (age) =>{
   
//    let name ="Rabin"
//    const check= age>=18 ? `${name} is Eligible`: `${name} is Not eligible`
//    console.log(check); 
// }

// DoSomething(18)

const person = {
    name:"Rabin",
    age: 23,
    isMarried: false
}
//destructuring
const {name,age,isMarried} = person
//spread operator
const person2 = {...person, name : 'Mortdale'}
console.log(name)

//.map,.filter,.reduce fucntion

let names = ["Pedro","Rabin","6-Figures","Pedro","Pedro"]

names.map((name)=>{
    return `${name}1`
})


names.filter((name) =>{
    return name !== "Pedro"
})


// Async await and fetch


 

