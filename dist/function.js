"use strict";
// function declaration
function sapa(nama, umur) {
    console.log("Halo, aku" + nama + "umurku" + umur);
}
sapa("yasir", 17);
// anonnymous function
const pcikers = function (name, role) {
    return name = role;
};
let pick = pcikers("Nana", "Mage");
console.log("saya ingin pergi ke mideline menggunakan" + pick);
// arrow function
let multiplication = (a, b) => {
    return a * b;
};
let result = multiplication(8, 7);
console.log(result);
