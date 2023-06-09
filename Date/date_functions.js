function DaysUntilNewYear(date){
    
    let Year = date.getFullYear();
    
    let nextyear= Year+1;
    
    let newyear= new Date(nextyear,0,1);
   
    let seconds=((newyear.getTime()-date.getTime()) / 1000);
    
    
    let min=seconds/60;
    
    let hours=min/60;
    
    let days= parseInt(hours/24);

    return days;

}

function DaysAfterQatar2022(){
    
    let date = new Date();
    let qatar = new Date(2022,11,18);  
    
    let seconds=((date.getTime()-qatar.getTime())/1000); 
    let min=seconds/60;
    let hours=min/60;
    let days= parseInt(hours/24);
   
    return days;

}

function DistanceBetweenDates(date1,date2){ 
     
    let seconds=((date1.getTime()-date2.getTime())/1000);
    let min=seconds/60;
    let hours=min/60;
    let days= parseInt(hours/24);

    return days;

}

function WorkdayOrNot(date){
    if(date.getDay()==0||date.getDay()==6){
        return false;
    }
    else{
        return true;
    }
}

