const validator = {
  isValid: function (creditCardNumber) {
    let sumDoubled = 0;
    let sumNotDoubled = 0;

    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(creditCardNumber.charAt(i));
      if ((creditCardNumber.length - i) % 2 === 0) {
        if ((digit *= 2) > 9) digit -= 9;
        sumDoubled += digit;
      } else {
        sumNotDoubled += digit;
      }
    }
    const totalSum = sumDoubled + sumNotDoubled;
    console.log(totalSum); // Log de total sum
    return totalSum % 10 === 0;
  },

  maskify: function (creditCardNumber) {
    const x = creditCardNumber.split("");
    for (let i = 0; i < x.length - 4; i++) {
      x[i] = "#";
    }
    return x.join("");
  },
};

export default validator;
