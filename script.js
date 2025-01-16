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

// console.log (getCoastersTallerThan(2));



//List of Coasters in Germany
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
// console.log(getCoastersInCountry("italy"));


//List of Coasters that opened after 2000
function getCoastersInyear (coasterYear){
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
console.log (getCoastersInyear("twin"));



//List of Coasters in at Six Flags Great America
function getLocationOfCoasters (Park){
    var matchingCoasters = []
    for (var i=0; i < ParkName.length; i++){
        if(ParkName[i].includes(Park)){
            matchingCoasters.push(coasterName[i]);
        }
    }
    return matchingCoasters;
}
// console.log(getLocationOfCoasters("Six Flags Great America"));


//List of Coasters that are made out of Wood
function getCoasterMaterial (Material){
    var matchingCoasters = []
    for (var i=0; i < Materials.length; i++){
        if(Materials[i].includes(Material)){
            matchingCoasters.push(coasterName[i]);
        }
    }
    return matchingCoasters;
}
// console.log(getCoasterMaterial("Wood"));

