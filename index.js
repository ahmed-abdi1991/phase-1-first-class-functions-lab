// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

function selectingDrivers() {
  const driversArray = [returnFirstTwoDrivers, returnLastTwoDrivers];
  return driversArray;
}
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

function selectingDrivers() {
  const driversArray = [returnFirstTwoDrivers, returnLastTwoDrivers];
  return driversArray;
}
function createFareMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}
function createFareMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);
function createFareMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const fareTripler = createFareMultiplier(3);

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
  return driverSelector(arrayOfDrivers);
}
