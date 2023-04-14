function contarMultiplos2(n){
	let c=0;
	for(let i=0; i<n.length; i++){
		if(parseInt(n[i])%2==0){
			c++;
		}
	}
	return c;
}

function contarMultiplos3(n){
	let c=0;
	for(let i=0; i<n.length; i++){
		if(parseInt(n[i])%3==0){
			c++;
		}
	}
	return c;	
}

function contarMultiplos4(n){
	let c=0;
	for(let i=0; i<n.length; i++){
		if(parseInt(n[i])%4==0){
			c++;
		}
	}
	return c;
}
function contarMultiplos5(n){
	let c=0;
	for(let i=0; i<n.length; i++){
		if(parseInt(n[i])%5==0){
			c++;
		}
	}
	return c;
}


function mediana(vector){
    vector.sort(function(a, b){return a-b});



    if(vector.length%2 != 0){
        let mitad= (((vector.length)-1)/2)+1;
        return mitad*2;
    }
    else{
        let mediana= (vector.length/2)+((vector.length/2)+1);
        return mediana;
    }

}

function moda(vector){
    

    let maxfrecuencia = frecuencia(vector[0], vector); 
    let moda=vector[0];
    for(let i=0; i<vector.length; i++){
        let nuevafrecuencia= frecuencia(vector[i],vector);
        if(nuevafrecuencia>maxfrecuencia){
            maxfrecuencia=nuevafrecuencia;
            moda=vector[i];
        }
    }
    return moda;


}

function frecuencia(x, array){

        let suma=0;
    for(let i=0; i<array.length; i++){
        if(array[i]==x){
            suma++;
        }
    }
    return suma;
}

function organizar(vector){

    vector.sort(function(a,b){return a-b;});

    return vector;
}
function hamming(v1,v2){
    let suma=0;
    let digits = cantDig(v1);
    v1.toString();
    v2.toString();    
    for(let i=digits; i>=0; i--){
        document.write(v1.charAt(i)+' '+v2.charAt(i)+'<br>')
        if(v1.charAt(i) == v2.charAt(i)){
            i=i;
        }
        else{
            suma++;
        }

    }

    return suma;
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
      
