function squash(x){
    x.parseToString
    let as=0;
    let bs=0;
    
    for(let i=0; i<x.length; i++){
        if(x[i]=='A'){
            as++;
        }
        if(x[i]=='B'){
            bs++;
        }
        if(x[i]=='F'){
            break;
        }
    }

    let values=[as,bs];

    return values;

}

function printValues(values){

    document.write(values[0]+'-'+values[1]);

}