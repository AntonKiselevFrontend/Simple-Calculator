let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiplication = document.querySelector("#multiplication");
let division = document.querySelector("#division");
let enter = document.querySelector("#enter");
let total = document.querySelector("#total");
let percentage = document.querySelector("#percent");
let reset = document.querySelector("#cancel");
let backspace = document.querySelector("#back");
let result = document.querySelector("#result");

function func() {
    enter.textContent += this.value
}
plus.addEventListener("click", func);
minus.addEventListener("click", func);
multiplication.addEventListener("click", func);
division.addEventListener("click", func);
/*
for (let operator of operators) {
    operator.addEventListener("click", function () {
        enter.textContent += this.value
    })
}  */
for (let digit of digits) {
    digit.addEventListener("click", function () {
        enter.textContent += Number(this.textContent)
    })
    result.addEventListener("click", function () {
        total.textContent = 0 + Number(enter.textContent);
    }) 
} 

percentage.addEventListener("click", function () {
    total.textContent = enter.textContent / 100
    if (total.textContent == "NaN") {
        total.textContent = "Error"
    } else {
        total.textContent = enter.textContent / 100
    }
});
reset.addEventListener("click", function () {
    enter.textContent = ""
    total.textContent = ""
});
backspace.addEventListener("click", function () {
    enter.textContent = String(enter.textContent).slice(0, -1)
});

