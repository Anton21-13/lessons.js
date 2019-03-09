for (let i = 2; i < 100; i++) {
  if (let b = 2; b < 10; b++) {
    if (i % b == 0) {
      continue
    }
  }
  console.log('Делители числа ' + i + ': 1 и ' + i)  
};