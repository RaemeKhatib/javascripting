
//let lastIndexOf = function (input, search) {
  
  /*for (i = input.length; i >= 0 ; i--) {
    let output = i;

  if (search === input[i]) {
    output = i;

  } else {
    output = -1 
  }return output;

}
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

*/

/*let lastIndexOf = function (input, search) {
  for (i = input.length; i >= 0 ; i--) {
    let output = i;

  if (search === undefined) {
    let output = -1
  } else if ( search === input[i]) {
    return output; 
  }
}
} */

let lastIndexOf = function (input, search) {
  let output = -1;
  for (i = input.length; i >= 0 ; i--) {


  if (search === input[i]) {
    output = i;
    break;
  } else {
    output = -1;
  }

}
return output;
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

