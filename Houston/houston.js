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
    showVector(A);
    document.write('<br>B = ');
    showVector(B);

    let C = houston(A,B);
    document.write('<br>C = ');
    showVector(C);

    let suma= sumaHouston(C);
    document.write('<br>La suma total es = '+ suma);

}

function showVector(A){
     for(let i=0; i<A.length; i++){
        document.write(A[i]+' ');
    }
}
    
    
    
