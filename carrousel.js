const grande =document.querySelector('.grande');
const btnSig =document.querySelector('.btn-sig');
const btnAtr =document.querySelector('.btn-atr');

let posicion = 0;

btnSig.addEventListener('click', ()=>{
    posicion -= 25;
    if(posicion<-75){
        posicion=0;
    }
    grande.style.transform = `translateX(${posicion}%)`;
})

btnAtr.addEventListener('click', ()=>{
    posicion += 25;
    if(posicion>0){
        posicion=-75;
    }    
    grande.style.transform = `translateX(${posicion}%)`;
})

