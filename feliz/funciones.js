function sumar(a,b){
  return a+b;
}
function imprimir(a){
    let i;
    for(i=0;i<a;i++){
        document.write('<br>hello world!');
    }

}

function entradaVar(){ 
  let x;
  x=prompt('');
   return x;
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

function esNarciso(n){
  
  let digits=0;
     
      digits = cantDig(n);
       
       let total=0;
       let y=0;
       let m=n;
      for(let x=digits-1 ; x>=0 ; x--){
        
        y = parseInt(m/(10**x));
        m = m-(y*(10**x));
       
        total=total+(y**digits);
        
      }
      if (total==n) {
        return true;
      }
      else{
         return false;
      }
}


function esPerfecto(n){

    let x=0;
    for(let j=1; j<n; j++){
      if(i%j==0){
        x=x+j;
      }
    }
    if(i==x){
      return true;
    }
    else{
      return false;
    }
  }

function esDefectivo(m){
    var total=0;
      
      for(var j=1; j<m; j++){
         if(m%j==0){
          total=total+j;
         } 
      }
      if(m>total){
        return true;
      } 
      else{
        return false;
      }
  }


function esAbundante(m){

     
    var total=0;
      
      for(var j=1; j<m; j++){
         if(m%j==0){
          total=total+j;
         } 
      }

      if(m<total){
        return true;
      } 
      else{
        return false;
      }
  }



 function esFeliz(n){
      
      if(n==1 || n==7){
        return true;
      }
      if(n<10){
        return false;
      }

      let x= cantDig(n);
      let total=0;
      let m=0;
      let o=n;
      for(let i=x-1; i>=0; i--){

          m=parseInt(o/(10**i));

          o=parseInt(o%(10**i));
          
          total=total+(m*m);
      }
      return esFeliz(total);

 }

function hamming(v1,v2){
    let suma=0;
    let digits = cantDig(v1);
    
    for(let i=digits-1; i>=0; i--){
       
        let ni1=0;
        let ni2=0;
        
        ni1= parseInt(v1/10**i);
        v1=v1-(ni1/10**i);

        ni2= parseInt(v2/10**i);
        v2=v2-(ni2/10**i);
        
        parseInt(ni1);
        parseInt(ni2);
        
        if(ni1 == ni2){
            i=0;
        }
        else{
            suma++;
        }
    }

    return suma;
}   
