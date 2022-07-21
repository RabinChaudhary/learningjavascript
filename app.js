const title=document.getElementById('main-heading')

    title.style.color='red';

 const ul=document.querySelector('ul')
 const li=document.createElement('li')

 ul.append(li)
 console.log(ul)


 li.innerText='iron-men'
 li.classList.add('list-items')




// listItems.style.fontSize='2em'

const button=document.querySelector('button');
const subHeading=document.querySelector('h3');

subHeading.innerText='Example 2'


button.addEventListener('click',clickFn=()=>alert(subHeading.innerText))



function changeButtonColor(){
  button.style.background='green';
}

button.addEventListener('mouseover',changeButtonColor)


const button1=document.querySelector('.reveal-btn')
const hiddenContent=document.querySelector('.hidden-content')
const contents=document.querySelectorAll('.boxes')




function revealContent(){
    contents[1].style.display='block';
}
button1.addEventListener('click',revealContent)
