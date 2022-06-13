import validator from './validator.js';

const btnComprar = document.getElementById('btnComprar');
const backButton = document.getElementById('backButton');
// const btnValidator = document.getElementById('btnValidator');
const result = document.getElementById('result');
const creditCardNumber = document.getElementById('creditCardNumber');

btnComprar.addEventListener('click', () => {
    const portada = document.querySelector(".portada");
    const validation = document.querySelector(".validation");
    portada.style.display = "none";
    validation.style.display = "inline-block";
});
       

backButton.addEventListener('click', () => {
    const portada = document.querySelector(".portada"); 
    const validation = document.querySelector(".validation");
    portada.style.display = "flex";
    validation.style.display = "none";
});


// btnValidator.addEventListener('click', (event) => {
//    event.preventDefault();

    const form = document.querySelector('form');
    const name = document.getElementById('name');
     form.addEventListener('submit', (event) => {
       if(name.value === '' || creditCardNumber.value === '') {
           alert('Por favor, ingresa los datos solicitados');
            
       }
         else if(validator.isValid(creditCardNumber.value)) {
            result.innerHTML = `Tu tarjeta es válida`;
         } else {
             result.innerHTML = `Tu verificación falló ${validator.maskify(creditCardNumber.value)}, ingresa un número válido`;
            
         }
         event.preventDefault();
        });
    //console.log("hola!", creditCardNumber.value);
    // if(validator.isValid(creditCardNumber.value)){
    //    //    checkInputs();
    //     result.innerHTML = `Tu tarjeta es válida`;
    // } else {
    //     result.innerHTML= `Tu verificación falló ${validator.maskify(creditCardNumber.value)}, ingresa un número válido`;
    // }

    // });
    // // function checkInputs(){
    //     if(creditCardNumber.value === ""){
    //         alert("Ingresa un número de tarjeta");
    //        /* result.style.display = "none";*/
    //     }
    // }
