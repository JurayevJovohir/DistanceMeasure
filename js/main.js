var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elResult1 = document.querySelector(".result");
var elResult2 = document.querySelector(".result2");
var elText1 = document.querySelector(".box__text");
var elText2 = document.querySelector(".box__text2");
var elText3 = document.querySelector(".box__text3");
var elText4 = document.querySelector(".box__text4");


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    function user(elInputValue, userSpeed) {
        var userSpeed = 3.6;
        var elInputValue = +elInput.value;
        return (elInputValue / userSpeed).toFixed(1) + " Hour";
    }
    elText1.textContent = user();

    function bicycle(elInputValue, bicycleSpeed) {
        var bicycleSpeed = 20.1;
        var elInputValue = +elInput.value;
        return (elInputValue / bicycleSpeed).toFixed(1) + " Hour";
    }
    elText2.textContent = bicycle();

    function car(elInputValue, carSpeed) {
        var carSpeed = 70;
        var elInputValue = +elInput.value;
        return (elInputValue / carSpeed).toFixed(1) + " Hour";
    }
    elText3.textContent = car();

    function airplane(elInputValue, airplaneSpeed) {
        var airplaneSpeed = 800;
        var elInputValue = +elInput.value;
        return (elInputValue / airplaneSpeed).toFixed(1) + " Hour";
    }
    elText4.textContent = airplane();

    var elInputValue = +elInput.value;
    if (elInputValue <! 0 || isNaN(elInputValue)) {
      elResult1.textContent = "0 dan katta son kiriting yoki harf kiriting ❌";;
    } else {
      elResult2.textContent = "👌";
    }
});    
