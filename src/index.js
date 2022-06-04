import validator from './validator.js';

const btnComprar = document.getElementById('btnComprar');
const backButton = document.getElementById('backButton');
const btnValidator = document.getElementById('btnValidator');
const result = document.getElementById('result');
const creditCardNumber = document.getElementById('creditCardNumber');

btnComprar.addEventListener('click', () => {
    const index = document.querySelector(".index");
    const validation = document.querySelector(".validation");
    index.style.display = "none";
    validation.style.display = "block";
});


btnValidator.addEventListener('click', (event) => {
   event.preventDefault();
    //console.log("hola!", creditCardNumber.value);
    if(validator.isValid(creditCardNumber.value)){
        result.innerHTML = `Tu tarjeta es válida`;
    } else {
        result.innerHTML= `Tu verificación falló ${validator.maskify(creditCardNumber.value)}, ingresa un número válido`;
    }
    });

    backButton.addEventListener('click', (event) => {
        const index = document.querySelector(".index");
        const validation = document.querySelector(".validation");
        index.style.display = "flex";
        validation.style.display = "none";
    });