class CRectangulo{
    constructor(b,h){
        this.b=b;
        this.h=h;
    }
    CalcularArea(){
        return ` ${this.b * this.h} `;
    }

}

const formul = document.getElementById('formulario');

formul.addEventListener('submit', function(event) 

 {
  event.preventDefault();

  let b = document.getElementById("base").value;
  let h = document.getElementById("altura").value;

  const rectangulo = new CRectangulo(b,h);

  const area_rectangulo = document.getElementById('area');
  area_rectangulo.innerHTML = "Area: " + rectangulo.CalcularArea();
 }
);