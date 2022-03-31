function validatePIN (pin) {
    console.log(pin.length);
    if ((pin.length == 4 || pin.length == 6) && (pin.match(/^\d+$/))){
        return true;
    } else{
        return false;
    }
  }

  console.log(validatePIN('1111'))
  console.log(validatePIN("1"));
  console.log(validatePIN('1.234'))
  console.log(validatePIN("090909"));
  