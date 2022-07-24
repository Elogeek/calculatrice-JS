let output = document.querySelector(".output");
let equals = document.getElementById("equals");
let clear = document.getElementById("clear");
let del = document.getElementById("delete");

/* I will look for all the calculator keys except the equal key. */
let button = document.querySelectorAll(".button");

let buttonLength = button.length;
output.innerHTML = "";

/* Sets screen output limit*/
//let outputLimit = 18;

/* I loop through all the calculator keys */
for (let i = 0; i < buttonLength; i++) {
    button[i].addEventListener("click", calculate);

    /* Compute */
    function calculate() {
        let outputLength = output.innerHTML.length;
        /* check which key was clicked */
        let caseCheked = this.value;

        /* Checks if the leading number is a "0". If it is, override the "0" with selected input */
        if ((output.innerHTML === 0) && (output.innerHTML.indexOf(".") === -1)) {
            output.innerHTML = caseCheked;
        } else {
            output.innerHTML += caseCheked;
        }

        // When you click on the equals key and display compute
        equals.addEventListener("click", function(){
            // Display the answer on the calculator
            output.innerHTML = eval(output.innerHTML);
        });

    }
}

// Refresh the screen of the calculator
clear.addEventListener("click", function() {
    output.innerHTML = "";
});

// clicked delete
del.addEventListener("click", function () {
    output.innerHTML = "";
})