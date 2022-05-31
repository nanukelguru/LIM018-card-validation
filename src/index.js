import validator from './validator.js';


const btnValidator = document.getElementById('btnValidator');
const result = document.getElementById('result');
const creditCardNumber = document.getElementById('creditCardNumber');


btnValidator.addEventListener('click', (event) => {
   // event.preventDefault()
    //console.log("hola!", creditCardNumber.value);
    if(validator.isValid(creditCardNumber.value)){
        result.innerHTML = `Tu tarjeta es válida`;
    } else {
        result.innerHTML = `Tu verificación falló ${validator.maskify(creditCardNumber.value)}, vuelve a intentarlo`;
    }
    });
