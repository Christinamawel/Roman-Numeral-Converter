function romanNumeralConverter(number) {
  let numeralArray = []
  let currentNum = number
  if (currentNum >= 1000) {
    numeralArray.push(convertDigit(Math.floor(currentNum/1000), "M", "error"));
    currentNum = currentNum - (Math.floor(currentNum/1000) * 1000);
    console.log(currentNum);
  }
  if (currentNum >= 500) {
    numeralArray.push(convertDigit(Math.floor(currentNum/500), "D", "M"));
    currentNum = currentNum - (Math.floor(currentNum/500) * 500);
    console.log(currentNum);
  }
  if (currentNum >= 100) {
    numeralArray.push(convertDigit(Math.floor(currentNum/100), "C", "D"));
    currentNum = currentNum - (Math.floor(currentNum/100) * 100);
    console.log(currentNum);
  }
  if (currentNum >= 50) {
    numeralArray.push(convertDigit(Math.floor(currentNum/50), "L", "C"));
    currentNum = currentNum - (Math.floor(currentNum/50) * 50);
    console.log(currentNum);
  }
  if (currentNum >= 10) {
    numeralArray.push(convertDigit(Math.floor(currentNum/10), "X", "L"));
    currentNum = currentNum - (Math.floor(currentNum/10) * 10);
    console.log(currentNum);
  }
  if (currentNum >= 5) {
    numeralArray.push(convertDigit(Math.floor(currentNum/5), "V", "X"));
    currentNum = currentNum - (Math.floor(currentNum/5) * 5);
    console.log(currentNum);
  }
  if (currentNum >= 1) {
    numeralArray.push(convertDigit(Math.floor(currentNum/1), "I", "V"));
    currentNum = currentNum - (Math.floor(currentNum/1) * 1);
    console.log(currentNum);
  }
  
  return numeralArray.join("");
}

function convertDigit(digit, numeral, letter) {
  let totalNumeral = "";
  if (digit <= 3 && digit > 0) {
    for (i = 0 ; i < digit; i++) {
      totalNumeral = totalNumeral.concat(numeral);
    }
  } else if (digit > 3) {
    totalNumeral = totalNumeral.concat(numeral + letter);
  } 
  return totalNumeral
}

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    const translation = romanNumeralConverter(parseInt($("#inputNumber").val()));
    $("#response").append(translation);
  });
});