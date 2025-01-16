var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Rollercoasters.csv"
var coasterName = getColumn(url, 1);
var ParkName = getColumn(url, 2);
var City = getColumn(url, 3);
var Countries = getColumn(url, 4);
var Region = getColumn(url, 5);
var Materials = getColumn(url, 6);
var Height = getColumn(url, 7);
var Speed = getColumn(url, 8);
var Length = getColumn(url, 9);
var Inversion = getColumn(url, 10);
var NumInversion = getColumn(url, 11);
var YearOpen = getColumn(url, 12);



//List Coasters greater than 10 ft
// Function is to determine Coasters that are taller than a given height
//coasterHeight {number} - the given height to find taller coasters than
// return {list} - all coasters taller than coasterHeight
function getCoastersTallerThan(coasterHeight){
    if (typeof coasterHeight != "number") {
        return ["Invalid input: Please provide a numeric value for the height."];
    }

    if(coasterHeight < 3){
        return ["The shorest coaster in the list is 3ft"]
    }
    var total = []
    for(var i=0; i < coasterName.length; i++){
        if( coasterHeight < Height[i]) {
            total.push(coasterName[i]);
        }
        
    }
    if(total.length == 0){
        total.push("There are no coasters greater than that height");
    }
  

    return total;
}

console.log (getCoastersTallerThan(2));



//List of Coasters in Germany
// Function is to determine Coasters that are in a country
//Country {string} - the given country
// return {list} - all coasters located within the country
function getCoastersInCountry(Country){
    if (typeof Country == "number") {
        return ["Invalid input: Please input country instead of number."];
            }

    var matchingCoasters = []
    for (var i=0; i < Countries.length; i++){
      
        if (Countries[i].toLowerCase().includes(Country.toLowerCase())){
            matchingCoasters.push(coasterName[i]);
        }
    }

    if(matchingCoasters.length == 0){
        return ["no matches for that country"]
    }
    return matchingCoasters;
}
console.log(getCoastersInCountry("italy"));


//List of Coasters that opened after 2000
// Function is to determine Coasters that are open after a year
//coasterYear {number} - The year of Coaster
// return {list} - all coasters that were open after a certain year
function getCoastersInyear (coasterYear){
    if (typeof coasterYear != "number") {
        return ["Invalid input: Please provide a numeric value for the year."];
    }
    if(coasterYear > 2014){
        return ["The newest coaster was built in 2014"];
    }
    var total = []
    for (var i=0; i < coasterName.length; i++){
        if (coasterYear < YearOpen[i]) {
            total.push(coasterName[i]);
        }
    }
    
    return total;
}
console.log (getCoastersInyear("twenty"));



//List of Coasters in at Six Flags Great America
// Function is to determine Coasters that are located in a certain park
//Parks {string} - the Park Name
// return {list} - all coasters that are located in the Park
function getLocationOfCoasters (Park){
    if (typeof Park != "string") {
        return ["Invalid input: Please provide a string for the park."];
    }
    var matchingCoasters = []
    for (var i=0; i < ParkName.length; i++){
        if(ParkName[i].includes(Park)){
            matchingCoasters.push(coasterName[i]);
        }
    }
    if(matchingCoasters.length == 0){
        return ["no matches for that park"]
    }
    
    return matchingCoasters;
}
console.log(getLocationOfCoasters("Parque de la Ciudad"));


//List of Coasters that are made out of Wood
// Function is to determine Coasters that are made out of a certain material
//Material{string} - The type of material
// return {list} - all coasters that are made of that material
function getCoasterMaterial (Material){
    if (typeof Park != "string") {
        return ["Invalid input: Please provide a string not a number."];
    }
    var matchingCoasters = []
    for (var i=0; i < Materials.length; i++){
        if(Materials[i].includes(Material)){
            matchingCoasters.push(coasterName[i]);
        }
    }
    if(matchingCoasters.length == 0){
        return ["no matches for that material"]
    }
    return matchingCoasters;
}
console.log(getCoasterMaterial("20"));

