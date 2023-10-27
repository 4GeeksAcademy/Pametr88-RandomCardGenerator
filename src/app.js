/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numero1 = number[Math.floor(Math.random() * number.length)];
  document.querySelector(".cambio").innerHTML = numero1;

  let figure = ["&hearts", "&diamond", "&clubs"];
  let figura1 = figure[Math.floor(Math.random() * figure.length)];
  document.querySelector(".figure").innerHTML = figura1;
};
