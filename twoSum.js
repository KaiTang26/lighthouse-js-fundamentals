function twoSum(nums, taget){

  if(nums.length===0){

    return "nums is empty";

  }else{

    var sum=0;
    var result=[];



    for(var i=0; i<nums.length-1;i++){

      for(var j=i+1; j<nums.length; j++){

        sum=nums[i]+nums[j];

        if(sum===taget){

          result.push(i);
          result.push(j);

          return result;

        }
      }
    }
  }
}


console.log(twoSum([3,2,4],6));