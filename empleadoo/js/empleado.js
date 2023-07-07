class CEmpleado{

    constructor(name,year,salary,adress){
        this.name= name;
        this.year=year;
        this.salary=salary;
        this.adress=adress;
    }
    timeWorking(){
        const d= new Date();
        let x=d.getFullYear();
         return x-this.year;
    }
    show(){
        return this.name + '<br> Año de llegada ' + this.year + '<br> Salario:' + this.salary+'<br> Direccion:'+this.adress ;
    }
    wallstreet(){
        return this.adress.includes("Wall Street");
    }




}

formulario = document.getElementById("formulario");

formulario.addEventListener('submit', function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    let salary = document.getElementById("salary").value;
    let adress = document.getElementById("adress").value;

    const empleado= new CEmpleado(name,year,salary,adress);
    const show_data= document.getElementById("show_data");
    show_data.innerHTML= '<p>Nombre: ' + empleado.show();
    
    const time_worked= document.getElementById("time_worked");
    time_worked.innerHTML =  'Tiempo en la empresa:'+empleado.timeWorking();
    const wallstreet= document.getElementById("wallstreet");
    wallstreet.innerHTML= "Esta en Wallstreet?: "+ empleado.wallstreet();

}
);