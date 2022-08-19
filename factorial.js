console.log("Factorial of n");
function factorial(n) {
  let factorialValue = 1;
  if (n < 0) {
    console.log("Please enter valid positive input");
  } else {
    for (let i = 2; i <= n; i++) {
      factorialValue *= i;
    }
    console.log(`factorial of ${n}: ` + factorialValue);
  }
}
factorial(0);
factorial(2);
factorial(3);
factorial(4);
factorial(5);
