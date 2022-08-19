console.log("isPowerOfTwo");
function isPowerOfTwo(n) {
  let number = n;
  if (number < 1) {
    console.log("Please enter valid positive number");
  } else if (n == 1) {
    console.log(`${n} isPowerOfTwo : True`);
  } else {
    while (number > 1) {
      if (number % 2 !== 0) {
        console.log(`${n} isPowerOfTwo : False`);
        break;
      }
      number = number / 2;
    }
    if (number === 1) {
      console.log(`${n} isPowerOfTwo : True`);
    }
  }
}
isPowerOfTwo(1);
isPowerOfTwo(2);
isPowerOfTwo(4);
isPowerOfTwo(5);
isPowerOfTwo(10);
isPowerOfTwo(1024);
