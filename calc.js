let calc = document.querySelector(".calc");
let enter = document.querySelector("#enter");
let result = document.querySelector("#total");

calc.addEventListener("click", function (event) {
    if(!event.target.classList.contains('calc__btn')) return;
    let value = event.target.innerText
    

    switch (value) {
        case "AC":
            enter.textContent = "";
            result.textContent = "";
            break;
        
        case "=":
            let equal = new Function ("return " + enter.textContent)();
            result.textContent = Number(equal).toFixed(9) 
            enter.textContent = "";
            break;

        case "%":
            result.textContent = new Function ("return " + enter.textContent)() / 100;
            break;

        case "( )":
            enter.textContent = "(" + enter.textContent + ")";
            break;

        default:
            enter.textContent += value
    }

    
})

let backspace = document.querySelector("#back");
backspace.addEventListener("click", function () {
    enter.textContent = String(enter.textContent).slice(0, -1)
});

let percentage = document.querySelector("#percent");
percentage.addEventListener("click", function () {
    result.textContent = enter.textContent / 100
    if (result.textContent == "NaN") {
        result.textContent = "Error"
    } else {
        result.textContent = enter.textContent / 100
    }
});
