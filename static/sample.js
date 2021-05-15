// Simple calculator app
// https://github.com/JS-Beginners/Calculator-JavaScript-Project
(function () {

    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");

    // retrieve data from numbers that are clicked
    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener("click", function (e) {
        if (screen.value === "") {
            screen.value = "Please Enter a Value";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener("click", function (e) {
        screen.value = "";
    })

})();