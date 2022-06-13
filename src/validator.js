

const validator = {
  isValid:(creditCardNumber) => {

    const length = creditCardNumber.length;
    const reverse = creditCardNumber.split('').reverse();
   // console.log(reverse);

    let sum = 0;

    for (let i = 0; i < length; i++) {
      let currentDigit = parseInt(reverse[i]);

      if (i  % 2 !== 0) {
        currentDigit = currentDigit * 2
        if(currentDigit > 9)
        {
         currentDigit = currentDigit - 9;  
         console.log(currentDigit);
        }
      }
      sum = sum + currentDigit;
      
      //console.log(sum);
      
    }
    return (sum % 10) === 0;

  },

  //   maskify: (creditCardNumber) => {
  //     return creditCardNumber.replace(/.(?=.{4})/g, '#');

  // }
  maskify: (creditCardNumber) => {
    return creditCardNumber.split('').map((valor, idx) => idx < creditCardNumber.length - 4 ? '#' : valor).join('');
    
}
};

export default validator;

