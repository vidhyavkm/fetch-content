var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
res.then((data)=> data.json()).then((data1)=>{
    console.log(data1);

console.log(data1[17].region)

var asiancount = data1.filter((obj)=>obj.region === "Asia")
console.log(asiancount);

// var population = asiancount.reduce((prev, curr)=>prev+curr.population,0)
// console.log(population);
})

// var res=fetch("https://data.covid19india.org/v4/min/data.min.json");
// res.then((data)=>data.json()).then((data1)=>{

//     console.log(data1.TN);
//     var result=data1.TN;
    
//    console.log(`Confirmed:${result.total.confirmed} deceased:${result.total.deceased}`)
// })