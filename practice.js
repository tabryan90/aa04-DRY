function sizeNumber(num1, num2, size) {
  let num;
  if (size === 'big') {
    num1 > num2 ? num = num1 : num = num2;
  } else if (size === 'small') {
    num1 < num2 ? num = num1 : num = num2;
  }
  return num;
}

function multiplyBiggerNumByTwo(num1, num2) {
  return sizeNumber(num1, num2, 'big') * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return sizeNumber(num1, num2, 'big') / 3;
}
  
function eatMostTacos(sum1, sum2) {
  return `I ate ${sizeNumber(sum1, sum2, 'big')} tacos.`;
}


function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${sizeNumber(weight1, weight2, 'small')} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
