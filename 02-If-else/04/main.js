let checkNum = prompt('Enter Your Number');
checkNum = Number(checkNum);
console.log(checkNum);

if (checkNum === '') {
  alert('Invalid number');
} else if (checkNum > 0) {
  alert('Positive number');
} else if (checkNum < 0) {
  alert('Negative number');
} else if (checkNum == 0) {
  alert('“Zero”');
} else {
  alert('Invalid number');
}
