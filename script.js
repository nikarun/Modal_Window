'use strict';

let modalBtns=document.querySelectorAll('.show-modal');
let hiddenBtn=document.querySelector('.modal');
let overlay=document.querySelector('.overlay');
let closeModal=document.querySelector('.close-modal');
let body=document.querySelector('body')
console.log(overlay);
let openModalfunc=function(){
    hiddenBtn.classList.remove('hidden')
   overlay.classList.remove('hidden')
  }
  let closeModalfunc=function(){
    hiddenBtn.classList.add('hidden')
    overlay.classList.add('hidden')
 }
for(let i=0; i<modalBtns.length; i++){
    modalBtns[i].addEventListener('click',openModalfunc)
}

closeModal.addEventListener('click',closeModalfunc);
overlay.addEventListener('click',closeModalfunc);
//event is a object that is passed whenever event is fired
document.addEventListener('keydown',function(event){
console.log(event);
if(event.key==='Escape') {
    if(!hiddenBtn.classList.contains('hidden')){
   closeModalfunc();
    }
}
})
 