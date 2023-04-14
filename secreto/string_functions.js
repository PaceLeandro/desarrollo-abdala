function dividirMensajes(mensajes){

	return mensajes.split('\n');

}

function esGrito(mensaje){

	const abc='A B C D E F J H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z';
	let letras=0; 
	let gritos=0;

	
	for(let i=0; i<mensaje.length; i++){
		
		if(mensaje.charAt(i).includes('!')==true){
			gritos++;	
		}	
		if(abc.includes(mensaje.charAt(i))==true){
			letras++;
		}

	}

	if(gritos>=letras){
		return true;
	}
	if(gritos<letras){
		return false;
	}

}

function esPalindromo(mensaje){

	mensaje=mensaje.toString();
	let x = mensaje.toLowerCase();

	x = x.split(' ').join('');
	
	let y=0;
	let z=0;

	for(let i=x.length-1; i>=0; i--){
		if(x[i]==x[z]){
			y++;
		}
		z++;
	}
	if(x.length==y){
		return true;
	}
	else{
		return false;
	}

}
function convertirNombre(frase){
	const vocales='aeiouAEIOU';
	const n= 'N n';
	frase.toString();
	let name="";
	for(let i=0; i<frase.length; i++){
		if(vocales.includes(frase[i])==false &&  (n.includes(frase[i])==false && vocales.includes(frase[i+1])==false) ){
			name+=frase.charAt(i)+'u';
		}
		else{
			name+=frase.charAt(i);
		}
	}
	name+='-san';
  return name;

}
function cifradoCesar(mensaje, factor){
    
    mensaje.toString();
    factor= parseInt(factor);

    mensaje=mensaje.toLowerCase();
    
    let cifrado=[mensaje.length];
    let cifra2=[mensaje.length];
    cifra2.toString();

    for(let i=0; i<mensaje.length; i++){
        
        if(mensaje.charCodeAt(i)>96 && mensaje.charCodeAt(i)<123 && (mensaje.charCodeAt(i)+factor)>96 && (mensaje.charCodeAt(i)+factor)<123){
            cifrado[i]=mensaje.charCodeAt(i)+factor;
        }
        if(mensaje.charCodeAt(i)>96 && (mensaje.charCodeAt(i)+factor)<97){
            cifrado[i]=mensaje.charCodeAt(i)+factor+26;
        }
		if(mensaje.charCodeAt(i)<123 && (mensaje.charCodeAt(i)+factor)>122){
            cifrado[i]=mensaje.charCodeAt(i)+factor-26;
        }		

        cifra2[i]= String.fromCharCode(cifrado[i]);
    }
    
    return cifra2;

}
function secreto(mensaje){

	mensaje=mensaje.toString();
	
	
	let y=0;
	let z=0;
    let decifrado=[mensaje.length];
    decifrado.toString();

    for(let j=0; j<mensaje.length; j++){
        if(mensaje[j]=="("){
            for(let x=j+1; x<mensaje.length; x++){
                if(mensaje[x]==")"){
                    let m=j;
                    for(let i=x-1; i>j; i--){
                        decifrado[m]=mensaje[i];
                        m++
                    }
                    j=x;
                    break;
                }
            }
        }
        else{
            decifrado[j]=mensaje[j];
        }
    }

    return decifrado;
}

function antivirus(mensaje){

    let letra1,letra2;
    let mensaje_desinfectado=''; 
    
    letra1 = prompt('Ingrese la primera letra');
    letra2 = prompt('Ingrese la segunda letra');
    
    mensaje_desinfectado+=mensaje.charAt(0);
    
    for(let i=1; i<mensaje.length; i++){
        if(mensaje.charAt(i-1)==letra1 && mensaje.charAt(i+1)==letra1 && mensaje.charAt(i)==letra2){
            i=i;
        }
        else{
            mensaje_desinfectado += mensaje.charAt(i);
        }
    }
    mensaje_desinfectado.toString();
    return mensaje_desinfectado;
}
