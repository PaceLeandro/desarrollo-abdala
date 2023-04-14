function esPrimo(x){
    
    let suma=0;
    
    for(let i=1; i<x;i++){
        if(x%i==0){
            suma+=1;
        }
    }
    
    if(suma==1){
        let m = cantDig(x);
       
        let y=0;
       
        let p=x;
       
        for(let i=m-1; i>=0; i--){
            y+= parseInt(p/10**i);
            p= p-parseInt((p/10**i));
        }

        let suma2=0;
        for(let i=1; i<y;i++){
            if(y%i==0){
                suma2+=1;
            }
        }

        if(suma2==1){
            return true;
        }
        else{
            return false;
        }

    }
    else{
        return false;
    }


}

function cantDig(x){
    let y=x;
    let count=0;
    
    while(y>=1){
      y = y/10;
      count++;
    }
  
    return count;
  }