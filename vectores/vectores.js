/*Generar un vector llamado A de N elementos (N ingresado por teclado) con números aleatorios menores a 32000.
Realizar y mostrar las siguientes funciones:
 Calcular el promedio de los elementos del vector --- devuelve un float –
 Generar un vector llamado B con los elementos mayores al promedio del vector A. -Devuelve un vector -
 Contar la cantidad de elementos que son múltiplos a la vez de 2 y 3. --- devuelve un int –
 Calcular la suma de todos los elementos del vector – devuelve un int –
 Generar un vector llamado C con los elementos del vector A multiplicado por 2. --devuelve un vector -
 Mostrar los resultados de todas las funciones y los vectores A,B y C.*/

function calculoPromedio(A){

    let suma=0;
    let promedio=0;
    parseFloat(promedio);

    for(let i=0; i<A.length; i++){
        suma+=A[i];
    }
    promedio = suma/(A.length);

    return promedio;

}

function mayoresAlPromedio(A,promedio){

    let B=[];

    for(let i=0; i<A.length; i++){
        if(A[i]>promedio){
            B.push(A[i]);
        }
    }

    return B;
}

function multiplos(A){

    let suma=0;
    
    for(let i=0; i<A.length; i++){
        if(A[i]%2==0 && A[i]%3==0){
            suma+=1;
        }
    }
    return suma;
}

function calculoTotal(A){

    let suma=0;
  
    for(let i=0; i<A.length; i++){
        suma+=A[i];
    }
    
    return suma;

}

function doble(A){

    let C=[];

    for(let i=0; i<A.length; i++){
        C[i]= A[i]*2;
    }

    return C;
}

function showResults(A){

    let promedio= calculoPromedio(A);
    document.write('promedio : '+ promedio);
    
  
    let cantMultiplos= multiplos(A);
    document.write('<br> Cantidad de multiplos de 2 y 3 = '+cantMultiplos);

    let suma= calculoTotal(A);
    document.write('<br>La suma total es = '+ suma);
    
    document.write('<br>A = ');
    for(let i=0; i<A.length; i++){
        document.write(A[i]+' ');
    }
    
    let B = mayoresAlPromedio(A,promedio);
    document.write('<br>B = ');
    for(let i=0; i<B.length; i++){
        document.write(B[i]+' ');
    }
    let C = doble(A);
    document.write('<br>C = ');
    for(let i=0; i<C.length; i++){
        document.write(C[i]+' ');
    }


}