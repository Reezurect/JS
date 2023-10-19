'use strict';

const title = document.getElementsByTagName('h1')[0];
const butCalculate = document.getElementsByClassName("handler_btn");
const butPlus = document.querySelector(".screen-btn");
const otherItems1 = document.querySelectorAll(".other-items.percent");
const otherItems2 = document.querySelectorAll(".other-items.number");
const inputRange = document.querySelector(".rollback input[type = 'range']");
const spanRange = document.querySelector(".rollback span[class = 'range-value']");
const totalInput = function () {
    let list = document.getElementsByClassName("total-input");
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
};
let listScreen = document.querySelectorAll(".screen");

console.log(title);
console.log(butCalculate);
console.log(butPlus);
console.log(otherItems1);
console.log(otherItems2);
console.log(inputRange);
console.log(spanRange);
console.log(totalInput());
console.log(listScreen);