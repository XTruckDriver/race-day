let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true;
let age = 42;

if (age >= 18 && earlyReg == true) {
    raceNumber += 1000;
    console.log(`You will race at 9:30am and wear number ${raceNumber}.`);
} else if (age >= 18 && earlyReg == false) {
    console.log(`You will race at 11:00am and wear number ${raceNumber}.`);
} else {
    console.log(`You will race at 12:30pm and wear number ${raceNumber}.`);
};



/*  console.log(raceNumber);
    console.log(earlyReg);
    console.log(age);
*/
