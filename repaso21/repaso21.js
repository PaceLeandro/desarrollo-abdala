function cantDig(x){
    let y=x;
    let count=0;
    
    if(y==0){
        count++;
    }

    while(y>=1){
      y = y/10;
      count++;
    }
  
    return count;
  }