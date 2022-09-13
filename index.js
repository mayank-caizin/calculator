document.addEventListener('DOMContentLoaded', () => {
    let expression = document.getElementById('expression');
    let buttons = document.querySelectorAll('.op');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(expression.value === "" || expression.value === "0") {
                expression.value = btn.innerHTML;
            }
            else {
                expression.value += btn.innerHTML;
            }
        });
    });

    // clear last value
    let clearLast = document.getElementById('clearLast');
    clearLast.addEventListener('click', () => {
        expression.value = expression.value.slice(0, -1);
    });

    // clear all
    let clearAll = document.getElementById('clearAll');
    clearAll.addEventListener('click', () => {
        expression.value = "0";
    });

    let equals = document.getElementById('equals');
    equals.addEventListener('click', () => {
        let result = "";

        let input = expression.value;

        // input.replace(/&#37;/g, "%");
        // input.replace(/&#247;/g, "/");
        // input.replace(/&#215;/g, "*");
        // input.replace(/&#8722;/g, "-");
        // input.replace(/&#43;/g, "+");

        try {
            // console.log(input);
            result = eval(input);
            expression.value = result;
        }
        catch (e) {
            if(e instanceof SyntaxError || e instanceof TypeError) {
                alert("Invalid Input!!!");
                expression.value = "0";
            }
        }
    });
});