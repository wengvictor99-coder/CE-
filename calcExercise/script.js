let num = prompt("Enter numbers separated by commas: ");
let numbers = num.split(",").map(Number);
function getAverage(num) {
  const averageOfNumbers = num.reduce((acc, curr) => acc + curr, 0) / num.length;
  return averageOfNumbers;
};

let average = getAverage(numbers);
console.log(average);
alert("The average of the numbers is: " + average);
