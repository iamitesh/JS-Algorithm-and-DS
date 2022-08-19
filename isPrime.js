console.log("Find isPrime");
function isPrime(n) {
  let factors = 0;
  if (n < 1) {
    console.log("Please enter valid positive number");
  } else {
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i == 0) {
        factors += 1;
        break;
      }
    }
    if (factors > 0) {
      console.log(`${n} isPrime : ` + "False" + factors);
    } else {
      console.log(`${n} isPrime : ` + "True" + factors);
    }
  }
}
isPrime(2);
isPrime(17);
isPrime(20);
isPrime(103);
