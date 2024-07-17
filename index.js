// Code your solution in this file!
let drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = (array) => array.slice(0, 2);
// console.log(returnFirstTwoDrivers(drivers));
const returnLastTwoDrivers = (array) => array.slice(-2);
// console.log(returnLastTwoDrivers(drivers));
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier) {
  let multiplierFunction = (fare) => {
    return fare * multiplier;
  };
  return multiplierFunction;
}
// console.log(createFareMultiplier(4));
const fareDoubler = createFareMultiplier(2);
// console.log(fareDoubler(5));

const fareTripler = createFareMultiplier(3);
// console.log(fareTripler(5));
const selectDifferentDrivers = (array, fn) => {
  //   console.log(fn(array));
  return fn(array);
};
// selectDifferentDrivers(drivers, returnFirstTwoDrivers);
