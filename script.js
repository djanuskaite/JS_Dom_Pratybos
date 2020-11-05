//  1. sukurti elementą, į jį įdėti tekstą 
//galime sukurti elementą ir į jį įdėti tekstą
const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);



//  2. Surasti elementą, pridėjam jam atributą
//galime įdėti link'ą
const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href= "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents"



//  3. Surasti elementų masyvą, pakeisti jų stilių
//pakeisti elementų stilių
let pMasyvas=document.querySelectorAll("p");

for(let i=0; i<pMasyvas.length; i++){
  pMasyvas[i].style.color = "blue";
}



// 4. Paimti reikšmę iš įvedimo lauko
//Paimti reikšmę iš įvedimo lauko 

const but=document.getElementById("ivedimoReiksmei");
const inputVal = document.getElementById("myInput");
let manoDiv = document.getElementById('atsakymas');


but.addEventListener("click",addReiksme);

  function addReiksme(){
        const vietinis = document.createElement("p");
            vietinis.innerText =inputVal.value;
            manoDiv.appendChild(vietinis); 
   
  }



// 5. įdėti elementus į HTML
const mygtukas=document.getElementById("spausk");
mygtukas.addEventListener("click", modifyText);

function modifyText(){
const info=document.querySelector('#sarasas');
info.innerHTML+='<li>informacija</li>'
}
