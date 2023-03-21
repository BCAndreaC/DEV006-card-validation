import validator from './validator.js';

const creditCardNumber2 = '1234567890';
const isValid2 = validator.isValid(creditCardNumber2);
console.log(isValid2);

const creditCardNumber3 = '5200219108562870';
const isValid3 = validator.isValid(creditCardNumber3);
console.log(isValid3);


function validarTC() {
  const creditCardNumber = document.getElementsByName("tarjeta")[0].value;
  const oculta = validator.maskify(creditCardNumber);
  const valida = validator.isValid(creditCardNumber);

  let mensaje;
  if(valida){
    mensaje = "Tu tarjeta " + oculta + " se ha validado, muchas gracias por su donación!";
  } else {
    mensaje = "Lo sentimos tu tarjeta " + oculta + " no hemos podido validarla, por favor prueba con otra tarjeta."
  }
  alert(mensaje);
}

const validarBtn = document.getElementById("btn__donar");
validarBtn.addEventListener("click", function () {
  const creditCardNumber = document.getElementsByName("tarjeta")[0].value;
  const name = document.getElementsByName("nombre")[0].value;
  const email = document.getElementsByName("correo")[0].value;
  const address = document.getElementsByName("fecha")[0].value;
  const cvv = document.getElementsByName("cvv")[0].value;

  if (creditCardNumber.trim() === '' || name.trim() === '' || email.trim() === '' || address.trim() === '' || cvv.trim()=== '') {
    alert("Por favor, complete todos los campos antes de continuar.");
    return;
  }
  validarTC();
});

