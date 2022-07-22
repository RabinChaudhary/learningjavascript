//variable

const accordion =document.getElementsByClassName('content-container');

// var array = Object.keys(accordion)
//     .map(function(key) {
//         return accordion[key];
//     });


// array.forEach(item=>{
//     item.addEventListener('click',()=>{
//         item.classList.toggle('active')
//     })
// })

for(let i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}