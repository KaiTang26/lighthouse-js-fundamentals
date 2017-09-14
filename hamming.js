function hammingDistance(x,y){


  var result= x ^ y;

  var str = result.toString(2);

  var count=0;

  for(var i=0; i<str.length; i++){

    if(str[i]==1){

      count+=1
    }

  }

  return count;


}

console.log(hammingDistance(1,4));

