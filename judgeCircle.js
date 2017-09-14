function judgeCircle(moves){

  var count=0;

  for(var i=0; i<moves.length; i++){

    if(moves[i]=="R"){

      count+=-1;

    }else if(moves[i]=="L"){

      count+=1;


    }else if(moves[i]=="U"){

      count+=-2;

    }else if(moves[i]=="D"){


      count+=2;


    }else{


      return "error";
    }

  }

  if(count===0){

    return true;

  }else{

    return false;
  }


}


console.log(judgeCircle("LL"));