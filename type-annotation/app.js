/*@flow*/

function foo(x,y) {
  return x + y;
}

foo('Hello',11);
/**
 * This code shows error as the function expects a string
 * as an argument but we are providing a number.
 */
