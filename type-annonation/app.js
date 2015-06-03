/*@flow*/

function len(x: string): number {
    return x.length;
}

len(10);
/**
 * This code shows error as the function expects a string
 * as an argument but we are providing a number.
 */