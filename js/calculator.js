// math.js for parsing expressions
var math = document.createElement('script');
math.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjs/3.3.0/math.min.js';
document.getElementsByTagName("head")[0].appendChild(math);

let current_number = "";
let expression = "";
let result_string = "";

function concatenateOperand(part) {
    // Concatenates two strings
    // We'll parse it into a number later

    if (result_string) {
        clearScreen();
    }
    switch (part) {
        // 0-9 represent digits, 10 represents .
        case "0":
            current_number = (current_number != "0") ? current_number + "0" : current_number;
            break;
        case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":
            if (current_number == "0")  
                current_number = part;
            else 
                current_number += part;
            break;
        case ".":
            current_number = (current_number != "" && current_number != "-" && current_number.indexOf(".") == -1) ? current_number + "." : current_number;
            break;
        // -1 represents the plus/minus modifier
        // if the number is negative, remove the minus
        // otherwise add - at the beginning
        case "+-":
            if (current_number.charAt(0) == '-') 
                current_number = current_number.substring(1);
            else current_number = "-" + current_number;
            break;
        default:
            break;
    }
}

function concatenateOperator(part) {
    if (result_string) {
        let temp_string = result_string;
        clearScreen();
        current_number = temp_string;
    }
    if (current_number) {
        let last_char = expression.charAt(expression.length - 1);
        if (last_char != "*" || last_char != "+" || last_char != "-" || last_char != "/") {
            if (current_number.charAt(0) == "-")
                current_number = "(" + current_number + ")";
            expression += current_number;
            expression += part;
            current_number = "";
        } else {
            expression = (expression.substring(0, expression.length - 2) + part);
        }
        document.getElementById("expression").value = expression;
    }
}

function equal() {
    if (current_number != "") {
        if (current_number.charAt(0) == "-")
            current_number = "(" + current_number + ")";
        expression += current_number;
        document.getElementById("expression").value = expression;
        current_number = "";
    } 
    let last = expression.charAt(expression.length - 1);
    if (last == "/" || last == "*" || last == "+" || last == "-") {
        expression = expression.substring(0, expression.length - 2);
        document.getElementById("expression").value = expression;
    }
    let result = math.eval(expression);
    result_string += result.toFixed(2);
    if (expression.charAt(expression.length - 1) != "=") {
        expression += "=";
        document.getElementById("expression").value = expression;
    }
    document.getElementById("inputValue").value = result.toFixed(2);
}

function setDisplay(modifier, mode) {
    if (mode == 1) {
        concatenateOperand(modifier);
        document.getElementById("inputValue").value = current_number;
    }
    else if (mode == 2) {
        concatenateOperator(modifier);
        document.getElementById("inputValue").value = current_number;
    }
    else if (mode == 3) 
        equal();
}

function clearScreen() {
    current_number = "";
    expression = "";
    result_string = "";
    document.getElementById("inputValue").value = "";
    document.getElementById("expression").value = "";
}

/* ZA URADITI:
    - Šta se dešava kada korisnik klikne neko dugme nakon što je izračunata prethodna vrednost?
    - Clear dugme - DONE
*/