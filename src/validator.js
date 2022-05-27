

const validator = {
  isValid:(creditCardNumber) => {
    
    const length = creditCardNumber.length;
    const reverse = creditCardNumber.split('').reverse();
    //console.log(reverse)
    let sum = 0;
    
  
     
    for (let i = 0; i < length; i++) {
      let currentDigit = parseInt(reverse[i]);
      //let currentDigit = parseInt(creditCardNumber[i]);
    //  console.log(currentDigit);
      if (i  % 2 !== 0) {
       // console.log()
        if ((currentDigit * 2) > 9){
          currentDigit = currentDigit - 9;  
        }
       
        
      }
      sum = sum + currentDigit;
        //console.log(sum)
        //return (sum % 10) === 0;

       
   // console.log(sum)
      
    }
   /*  if (sum % 10 === 0){
      return true;
      console.log("es valido")
     }
     return false; */
     //console.log(validator.isValid('79927398713'))
  }

};

maskify:(creditCardNumber) => {
 

}
export default validator;

