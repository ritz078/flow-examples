/*@flow*/

/*====Type annonating a function====*/
function add(x: number, y: number): number {
  return x + y;
}

add(3, 4);

/*-------- Type annonating an array ----------*/
var foo: Array < number > = [1, 2, 3];

/*-------- Type annonating a Class ---------*/
class Bar {
  x: string; // x should be number
  y: string | number; // y can be either a string or a number
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

var bar1: Bar = new Bar('hello', 4);

/*====== Type annonating an object =======*/

var obj: {
  a: string,
  b: number,
  c: Array < string > ,
  d: Bar
} = {
  a: "hello",
  b: 42,
  c: ["hello", "world"],
  d: new Bar('hello', 3)
}
