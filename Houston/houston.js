function houston(A,B){
    let C=[];
    for(let i=0; i<A.length; i++){
        C.push((A[i]*B[i]))
    }
    return C;
}

function sumaHouston(C){
    let suma=0;
    for(let i=0; i<C.length; i++){
        suma+=C[i];
    }
    return suma;
}

function showHoustonResults(A,B){
    
   
    document.write('<br>A = ');
    for(let i=0; i<A.length; i++){
        document.write(A[i]+' ');
    }
    document.write('<br>B = ');
    for(let i=0; i<B.length; i++){
        document.write(B[i]+' ');
    }

    let C = houston(A,B);
    
    document.write('<br>C = ');
    for(let i=0; i<C.length; i++){
        document.write(C[i]+' ');
    }

    let suma= sumaHouston(C);
    document.write('<br>La suma total es = '+ suma);

}