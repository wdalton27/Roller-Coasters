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
    var total = []
    for(var i=0; i < coasterName.length; i++){
        if( coasterHeight < Height[i]) {
            total.push(coasterName[i]);
        }
        
    }
    if(total.length == 0){
        total.push("There are no coasters greater than that height");
    }
    if(total.length == String){
        total.push("Put in a number not a string");
    }
    return total;
}

console.log (getCoastersTallerThan("Silver Bullet"));



//List of Coasters in Germany
function getCoastersInCountry(Country){
    var matchingCoasters = []
    for (var i=0; i < Countries.length; i++){
      
        if (Countries[i].includes(Country)){
            matchingCoasters.push(coasterName[i]);
        }
    }
    return matchingCoasters;
}
console.log(getCoastersInCountry("Germany"));


//List of Coasters that opened after 2000
function getCoastersInyear (coasterYear){
    var total = []
    for (var i=0; i < coasterName.length; i++){
        if (coasterYear < YearOpen[i]) {
            total.push(coasterName[i]);
        }
    }
    return total;
}
console.log (getCoastersInyear(2000));



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
console.log(getLocationOfCoasters("Six Flags Great America"));


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
console.log(getCoasterMaterial("Wood"));

