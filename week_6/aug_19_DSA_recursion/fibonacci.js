//iterative
function fibIter(n) {
  var result = 0,
    a = 0,
    b = 1; //a represents n-2 and b represents n-1
  if (n == 0) return 0;
  if (n == 1) return 1;
  for (var i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
}
console.log('fibIter', 100, fibIter(100));

//tail recursion - much faster
function fibtail(n, a, b) {
  if (n === 0) return a;
  if (n === 1) return b;
  return fibtail(n - 1, b, (a + b));
}
console.log('fibtail', 100, fibtail(100, 0, 1));
//non tail recursion
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log('fib recur nontail', 100, fib(100));

//output a series
// for (var i = 0; i <= 42; i++) {
//   console.log('fibtail: n=', i, ':', fibtail(i, 0, 1));
// }