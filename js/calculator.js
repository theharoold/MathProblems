let current_number = "";

const calculator = {
    first_operand: 0,
    second_operand: 0,
    operator: 0,
    result: 0,
    ans: 0
};

function setOperators(number1, number2, operator) {
    calculator.first_operand = number1;
    calculator.second_operand = number2;
    calculator.operator = operator;
}

function calculateResult() {
    calculator.result = (calculator.operator == 1) ? calculator.first_operand + calculator.second_operand : calculator.first_operand - calculator.second_operand;
    console.log(calculator.result);
}

function concatenateOperand(part) {
    // Concatenates two strings
    // We'll parse it into a number later
    switch (part) {
        // 0-9 represent digits, 10 represents .
        case "0":
            current_number = (current_number != "0" && current_number != "-") ? current_number + "0" : current_number;
            break;
        case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":
            if (current_number == "0")  
                current_number = part;
            else 
                current_number += part;
            break;
        case "10":
            current_number = (current_number != "" && current_number != "-") ? current_number + "." : current_number;
            break;
        // -1 represents the plus/minus modifier
        // if the number is negative, remove the minus
        // otherwise add - at the beginning
        case "-1":
            if (current_number.charAt(0) == '-') 
                current_number = current_number.substring(1);
            else current_number = "-" + current_number;
            break;
        default:
            break;
    }
}