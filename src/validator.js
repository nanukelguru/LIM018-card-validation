

const validator = {
  isValid:(creditCardNumber) => {
    const length = creditCardNumber.length;
    let count = 0;
    
  

    for (let i = 0; i < length; i++) {
      let currentDigit = parseInt(creditCardNumber[i]);
      if ((i + 1) % 2 == 0) {
        if ((currentDigit * 2) > 9){
          currentDigit = currentDigit - 9;
        }
        else{
          count = count + currentDigit;
        }
    
       
      }
      return (count % 10) === 0;
    }
  }
};

maskify:(creditCardNumber) => {
 

}
export default validator;

