// Code your solution in this file!
let drivers =['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(value){
        return value * multiplier;
    }
}

const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2;
}

const fareTripler = function(createFareMultiplier){
    return createFareMultiplier * 3;
}

function selectDifferentDrivers(drivers, fn){
    return fn(drivers);
}
