'use strict';

//let mas = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
//  47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]


numbers:
for (let i = 2; i < 100; i++) {
  for (let b = 2; b < i; b++) {
    if (i % b == 0) 
    continue numbers;   
  }
  console.log('Делители числа ' + i + ': 1 и ' + i);
}

/*
nextPrime:
  for (var i = 2; i <= 10; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // простое
  }*/
/*
let allNumbers = 
  numbers: [2, 100],



alert('Делители ' + presentNumbers[0] + ': 1 и ' + presentNumbers[0]);
alert('Делители ' + presentNumbers[1] + ': 1 и ' + presentNumbers[1]);
alert('Делители ' + presentNumbers[2] + ': 1 и ' + presentNumbers[2]);
*/