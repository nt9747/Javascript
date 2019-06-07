function countPrime(n) {
  if (n < 2) {
    return 0;
  } else {
    let check;
    let sh = 0;
    for (let i = 2; i <= n; i++) {
      for (let j = 0; j <= i; j++) {
        if (i % j == 0 && i !== j) {
          check = true;
          console.log(check);
          if (check){
            sh = sh + 1;
          }
        }
      }
    }
  }
  // return sh;
}
console.log(countPrime(10));

