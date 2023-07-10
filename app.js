"use strict";
const num1Ele = document.getElementById("num1");
const num2Ele = document.getElementById("num2");
const buttonEle = document.querySelector("button");
const numResults = [];
const textResults = [];
function addNumber(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonEle.addEventListener("click", () => {
    const num1 = num1Ele.value;
    const num2 = num2Ele.value;
    const result = addNumber(+num1, +num2);
    numResults.push(result);
    const stringResult = addNumber(num1, num2);
    textResults.push(stringResult);
    printResult({ val: result, timeStamp: new Date() });
    console.log(numResults, textResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("it worked");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split("w"));
});
