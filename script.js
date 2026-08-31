const ham = document.getElementById('ham')
const nav = document.getElementById('sidebar')
const content = document.querySelector('.content')
const close = document.getElementById('closeicon')
const fans = document.getElementById('fans')
const receipt = document.querySelector('#receipt')
const welcome = document.querySelector('#welcome')

ham.addEventListener('click', openNav)

close.addEventListener('click',closeNav)

console.log(receipt)
fans.addEventListener('mouseover',()=> {
    receipt.style.transform = 'rotate(-10deg)'
    welcome.style.transform = 'rotate(10deg)'
    console.log('hovered')
})
fans.addEventListener('mouseleave',()=> {
    receipt.style.transform = 'rotate(0deg)'
    welcome.style.transform = 'rotate(0deg)'
    console.log('hovered')
})

function openNav(){

 nav.classList.add('flex')
 content.classList.add('hidden')
 nav.style.transform = 'translateX(0%)'
}

function closeNav(){
    if(window.innerWidth < 760)
    content.classList.remove('hidden')
    nav.style.transform = 'translateX(-100%)'

 content.classList.remove('hidden') 
}

window.addEventListener('resize',() => {
     if(window.innerWidth > 760){
         content.classList.remove('hidden')
          nav.classList.remove('hidden')
          nav.style.transform = '  translateX(0)'
     }
     if(nav.style.transform < ' translateX(0)'){
nav.style.transform = 'translateX(0)'
     }

     if(window.innerWidth < 760){
          nav.style.transform = '  translateX(-100%)';
           content.classList.remove('hidden')
     }
})