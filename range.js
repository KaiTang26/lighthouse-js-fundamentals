function range (start, end, step){

  var some_array = [];

  for (var i = start; i <= end; i+=step){

    some_array.push(i);

  }

  return some_array;


}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));


