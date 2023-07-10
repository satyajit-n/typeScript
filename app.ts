const num1Ele = document.getElementById("num1") as HTMLInputElement;
const num2Ele = document.getElementById("num2") as HTMLInputElement;
const buttonEle = document.querySelector("button")!;

const numResults: Array<number> = [];
const textResults: string[] = [];

type NumOrString = number | string;
type Result = { val: number; timeStamp: Date };

interface ResultObj {
  val: number;
  timeStamp: Date;
}

function addNumber(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

function printResult(resultObj: ResultObj) {
  console.log(resultObj.val);
}

buttonEle.addEventListener("click", () => {
  const num1 = num1Ele.value;
  const num2 = num2Ele.value;
  const result = addNumber(+num1, +num2);
  numResults.push(result as number);
  const stringResult = addNumber(num1, num2);
  textResults.push(stringResult as string);
  printResult({ val: result as number, timeStamp: new Date() });
  console.log(numResults, textResults);
});

const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("it worked");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result.split("w"));
});
