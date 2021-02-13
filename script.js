//Create a request variable
var request=new XMLHttpRequest();
//Create a connection
request.open("GET","https://restcountries.eu/rest/v2/all",true);
//Send the request
request.send();
//Process and load response
request.onload=function() {
 var data=JSON.parse(this.response);
 console.log(data);

// Get all the countries from Asia continent / "region" using Filter function
var asianCountry=data.filter(function(item){
    return(item.region=="Asia");
})
console.log(asianCountry);

// Get all the countries with population of less than 2 lacs using Filter function
var lowpopCountry=data.filter(function(item){
    return(item.population<200000);
})
console.log(lowpopCountry);

// Print the following details name, capital, flag using forEach function 

   data.forEach(function(item){ console.log(item.name,item.capital,item.flag)})

// Print the total population of countries using reduce function
var totalPopulation=data.map(function(item){return (item.population)}).reduce((total,countrypop)=>{
    return total+countrypop;
});
console.log(totalPopulation);

//Print the country which uses US Dollars as currency

var usDollarCountries=data.filter((country)=>{
    //here converting currencies array of object into array of currency codes
    //and checking condition if code USD is present in currency code array y using indexOf
    //(using +1 to make condition true if usd present at 0th index)
    return ((country.currencies.map((currency)=> {return currency.code})).indexOf("USD")+1)
})
console.log(usDollarCountries.map((country)=>{return country.name}));
}