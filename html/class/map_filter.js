function findDivisible(numbers, divisor) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      return true; 
    }
  }
  return false; 
}
let nums = [7, 13, 15, 22];
console.log(findDivisible(nums, 5)); 
console.log(findDivisible(nums, 4)); 


//filter
function findDivisible(numbers, divisor) {
  let divisibleNumbers = numbers.filter(num => num % divisor === 0);
  return divisibleNumbers.length > 0;
}

let nums1 = [7, 13, 15, 22];
console.log(findDivisible(nums1, 5)); 
console.log(findDivisible(nums1, 4));


//map
function findDivisible(numbers, divisor) {
  let result = false;

  numbers.map(num => {
    if (num % divisor === 0) {
      result = true;
    }
  });

  return result;
}

let nums2 = [7, 13, 15, 22];
console.log(findDivisible(nums2, 5)); 
console.log(findDivisible(nums2, 4)); 


let numbers = [2, 4, 6];

let doubled = numbers.map(function(num, i, arr) {
  console.log("Element:", num, "Index:", i, "Array:", arr);
  return num * 2;
});

console.log("Result:", doubled);
