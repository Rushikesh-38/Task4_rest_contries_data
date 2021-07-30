var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload= function(){
    var data=JSON.parse(this.response);
    console.log(data);
    //Contries of asia
    var continent_asia=data.filter((ele)=>ele.region==="Asia");
    console.log(continent_asia);
    //country having population less than 200000
    var population_f=data.filter((ele)=>ele.population<200000);
    console.log(population_f);
    //countries having USD as currency
    var US_currency=data.filter((ele)=>{
        for(let i in ele.currencies){
            if(ele.currencies[i].code==="USD")
                return true; 
        }
    }
    );
    console.log(US_currency);     
//Total polation 
 var total_population=data.reduce((acc,ele)=>acc+ele.population,0);
console.log(total_population);
}


