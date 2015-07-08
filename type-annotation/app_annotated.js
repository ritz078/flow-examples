/*@flow*/

function foo(x : number,y : number) : number{
  return x + y;
}

foo('Hello',11);

/**
 * This code shows error as the function expects a number
 * but we are providing a string.
 */
