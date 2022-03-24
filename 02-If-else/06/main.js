let firstNumber = Number(prompt('Enter first Number'));
let secondNumber = Number(prompt('Enter second Number'));
console.log(firstNumber);
let sum = firstNumber + secondNumber;
console.log(sum);
console.log(typeof sum);
if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert('Invalid number');
} else {
  alert(sum);
}

// if(isNaN(firstNumber)){
//   alert('Invalid number');
// }else if(isNaN(secondNumber)){
//   alert('Invalid number');
// }else {
//   alert(sum);
// }
