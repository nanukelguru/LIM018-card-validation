import validator from './validator.js';


const btnValidator = document.getElementById('btnValidator');
const result = document.getElementById('result');

btnValidator.addEventListener('click', () => {
const creditCardNumber = document.getElementById('creditCardNumber').value;
    
    if(validator.isValid(creditCardNumber)  === true){
        result.innerHTML = "Tu tarjeta es válida";
    } else
        result.innerHTML = "Tu verificación falló, vuelve a intentarlo";
        
})


/* const btnValidator = document.getElementById('btnValidator');
    btnValidator.addEventListener('click' , () =>{
        const creditCardNumber = document.getElementById('creditCardNumber').value;
        if(validator.isValid(creditCardNumber)){
            message = "Tu tarjeta es válida";
        }
   

     */


console.log(validator);








