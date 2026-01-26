let myInfoText = text;

myInfoText = myInfoText.replaceAll("JavaScript", "JAVASCRIPT").toUpperCase();

console.log(myInfoText);

console.log("Длина строки:", myInfoText.length);

console.log("Первый символ:", myInfoText[0]);

console.log("Последний символ:", myInfoText[myInfoText.length - 1]);
