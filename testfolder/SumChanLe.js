function compareSumOfDigits(input) {
  input = input.split("");
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0){
      count2 += parseInt(input[i])
    }
    else {
      count1 += parseInt(input[i]);
    }
  }
  return Math.abs(count1 - count2);
}
let str = '02323112345';
console.log(compareSumOfDigits(str));