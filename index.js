// Code your solution in this file!
// let drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
createFareMultiplier = (multiplier) => (value) => value * multiplier;
const fareDoubler = (fare) => fare * 2;
const fareTripler = (fare) => fare * 3;
const selectDifferentDrivers = (arrayOfDrivers, fn) => fn(arrayOfDrivers);
