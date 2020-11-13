const vardas = 'Vardas';
const pavarde = 'Pavarde';
console.log(`as esu ${vardas} ${pavarde}`);


const Brutto = 1200;
const netto = Brutto - Brutto * 0.2 - Brutto * 0.0698 - Brutto * 0.1252;
console.log(`Brutto gaunu ${Brutto}`);
console.log(`Netto gaunu ${netto}`);
console.log(`netto tipas: ${typeof(netto)}`)

const jonas = 'Jonas';
const petras = 'Petras';
let jonoMass = 25;
let petroHeight = 0.58;
let jonoHeight = 1.8;
let petroMass = 2;
const jonoBMI = jonoMass / jonoHeight^2;
const petroBMI = petroMass / (petroHeight * petroHeight);
const heigher = jonoBMI > petroBMI;
console.log(`ar Jono BMI didesnis uz Petro: ${heigher}`);
console.log(`Jono BMI: ${jonoBMI}`);
console.log(`Petro BMI ${petroBMI}`);
if(heigher){
    console.log(`Jono BMI didesnis`);
    
} else {
    console.log(`Petro BMI didesnis`);
}