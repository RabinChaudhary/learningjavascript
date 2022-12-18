// Arrow Function



// let age;
// const DoSomething = (age) =>{
   
//    let name ="Rabin"
//    const check= age>=18 ? `${name} is Eligible`: `${name} is Not eligible`
//    console.log(check); 
// }

// DoSomething(18)

// const person = {
//     name:"Rabin",
//     age: 23,
//     isMarried: false
// }
// //destructuring
// const {name,age,isMarried} = person
// //spread operator
// const person2 = {...person, name : 'Mortdale'}
// console.log(name)

// //.map,.filter,.reduce fucntion

// let names = ["Pedro","Rabin","6-Figures","Pedro","Pedro"]

// names.map((name)=>{
//     return `${name}1`
// })


// names.filter((name) =>{
//     return name !== "Pedro"
// })


// Async await and fetch

const array = [1,2,3,4,53,66,66];
// const newArray = array.map((array)=>{
//                  return array*2})
// const filteredArray = array.filter((number)=>{
//     return number < 5
// })

const reducedArray = array.reduce((sum,number)=>{
 return sum + number
}, 0)

console.log(reducedArray)

const users = [
    {id:1,name: "Rbain",age:23},
    {id:2,name: "Gon",age:23},
    {id:3,name: "oasod",age:23},
    {id:4,name: "Rbasdkaain",age:23},
    {id:5,name: "laksda",age:23},
]

const removeUser = (id,newAge) => {
    const newUserArray=users.map((user) =>{
        if (user.id === id){
            return {id : user.id, name : user.name, newAge : user.newAge};
        } else {
            return user;
        }
    });


    return newUserArray;
}

console.log(removeUser(1,24));



 

