//What is needed to learn in js?
//1. Equality
//2. Asynchronous Funciton
//3. Error handling
//4. Es6 Sytax
//5. Array methods

//Learn Asynchronous Function

//Callbacks:
//button event handler in browser JS
// setTimeout(()=>{
//     console.log("Hi I am 2 sec late")
// }, 2000)

//error  first callbacks
// fs.readFile('./test.text',{encoding: 'utf-8' },(err,data)=>{
//     if(err){
//         console.error("error");
//         console.error(err);

//     } else {
//         console.error('GOT Data')
//     }
// })

//create a promise
// const myPromise = new Promise((resolve, reject)=>{
//     const rand = Math.floor(Math.random()*2);
//     if(rand===11){
//         resolve();
//     } else {
//         reject();
//     }
// });
// myPromise.then(()=>console.log('Success'));

const posts = [

    {title: 'Post one', body : 'This is body one'},
    {title: 'Post two', body : 'This is body two'},
];




getPosts=()=>{
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            output +=`<li>${post.title}</l>`;
        });
        document.body.innerHTML = output;
    },1000)
}

createPost = (post) =>{
return new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            } else{
                reject('Error:Something went wrong');
            }
        }, 2000)
    }) 
}

// createPost({title: 'Post three', body : 'this is Post three'})
// .then(getPosts)
// .catch(err=>console.log(err))

///Async and Await
async function init(){
    await createPost({title: 'Post three', body : 'this is Post three'});
    getPosts();
}

init()




//Promise.all
// const promise1=Promise.resolve('Hello')
// const promise2=10
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'GoodBye');
// })
// const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>
//     res.json())

// Promise.all([promise1,promise2,promise3,promise4]).then(values=>{
//     console.log(values)
// })

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data)
}

fetchUsers();