console.log("Fibonacchi Sequence");
function fibonacchi(n) {
  const fib = [0, 1];
  if (n <= 0) {
    console.log("Input shound be greater than 0");
  } else {
    for (let i = 2; i < n; i++) {
      const newMember = fib[i - 1] + fib[i - 2];
      fib[i] = newMember;
    }
    console.log(`fibonacchi of ${n}: ` + [...fib]);
  }
}
//Big-O:O(n)

fibonacchi(4); //[0,1,1,2]
fibonacchi(7); //[0,1,1,2,3,5,8]
fibonacchi(10); //[0,1,1,2,3,5,8,13,21,34]
