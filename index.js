document.addEventListener('DOMContentLoaded', () => {
    let expression = document.getElementById('expression');
    let buttons = document.querySelectorAll('.op');
    let result = "";

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(btn.classList.contains('plus')) result += "+";
            else if(btn.classList.contains('minus')) result += "-";
            else if(btn.classList.contains('multiply')) result += "*";
            else if(btn.classList.contains('divide')) result += "/";
            else if(btn.classList.contains('mod')) result += "%";
            else result += btn.innerHTML;

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
        result = result.slice(0, -1);
    });

    // clear all
    let clearAll = document.getElementById('clearAll');
    clearAll.addEventListener('click', () => {
        expression.value = "0";
        result = "";
    });

    // output the result
    let equals = document.getElementById('equals');
    equals.addEventListener('click', () => {
        try {
            console.log(result);
            result = eval(result);
            expression.value = result;
        }
        catch (e) {
            if(e instanceof SyntaxError || e instanceof TypeError) {
                alert("Invalid Input!!!");
                expression.value = "0";
                result = "";
            }
        }
    });
});