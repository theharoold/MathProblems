// regex for validating numbers:
// /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/
// found on stackoverflow https://stackoverflow.com/questions/15699094/how-to-validate-a-number-field-in-javascript-using-regular-expressions

function validateInput() {

    // CSS changes to invalid input will be moved to a different file 
    // When front-end is done

    let field_a = document.getElementById("input_a");
    let field_b = document.getElementById("input_b");
    let field_c = document.getElementById("input_c");
    let value_a = field_a.value;
    let value_b = field_b.value;
    let value_c = field_c.value;
    const regex = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/;
    if ((regex.test(value_a)) && (regex.test(value_b)) && (regex.test(value_c))) {
        field_a.style.borderColor = "rgb(204, 204, 204)";
        field_a.setCustomValidity("");
        field_b.style.borderColor = "rgb(204, 204, 204)";
        field_b.setCustomValidity("");
        field_c.style.borderColor = "rgb(204, 204, 204)";
        field_c.setCustomValidity("");

        return {
            a: Number(value_a), 
            b: Number(value_b), 
            c: Number(value_c)
        };
    } else {
        if (!regex.test(value_a)) {
            field_a.setCustomValidity("Invalid input");
            field_a.style.borderColor = "red";
        } else {
            field_a.style.borderColor = "rgb(204, 204, 204)";
            field_a.setCustomValidity("");
        }
        if (!regex.test(value_b)) {
            field_b.setCustomValidity("Invalid input");
            field_b.style.borderColor = "red"; 
        } else {
            field_a.style.borderColor = "rgb(204, 204, 204)";
            field_a.setCustomValidity("");
        }
        if (!regex.test(value_c)) {
            field_c.setCustomValidity("Invalid input");
            field_c.style.borderColor = "red";
        } else {
            field_a.style.borderColor = "rgb(204, 204, 204)";
            field_a.setCustomValidity("");
        }
    }
    return null;
}

function getUserInput() {
    let values = validateInput();
    if (values) {
        // Solve the quadratic equation
        const D = values.b*values.b - 4*values.a*values.c;
        //console.log(values.a + " " + values.b + " " + values.c + " D = " + D);
        if (D > 0) {
            return {
                x1: ( (-values.b - Math.sqrt(Math.pow(values.b,2)-4*values.a*values.c)) / (2*values.a)),
                x2: ( (-values.b + Math.sqrt(Math.pow(values.b,2)-4*values.a*values.c)) / (2*values.a)),
                imaginary: false
            };
        } else if (D == 0) {
            return {
                x1: -values.b/(2*values.a),
                x2: -values.b/(2*values.a),
                imaginary: false
            };
        } else {
            // D < 0
            return {
                x_real: (-values.b/(2*values.a)),
                x_imaginary1: -(Math.pow(values.b,2) - 4*values.a*values.c),
                x_imaginary2: 2*values.a,
                imaginary: true
            };
        }
    }
    else
        return null;
}


// Placeholder function - is subject to change,
// depending on the new front-end 
function displayInput() {
    let values = getUserInput();
    if (values) {
        let displaySpan1 = document.getElementById("result_quadratic_x1");
        let displaySpan2 = document.getElementById("result_quadratic_x2");
        if (values.imaginary) {
            displaySpan1.innerHTML = "x1 = " + values.x_real + " - <i>i</i>(&Sqrt;" + values.x_imaginary1 + ")/" + values.x_imaginary2;
            displaySpan2.innerHTML = "x2 = " + values.x_real + " + <i>i</i>(&Sqrt;" + values.x_imaginary1 + ")/" + values.x_imaginary2;
        } else {
            displaySpan1.innerHTML = "x1 = " + values.x1;
            displaySpan2.innerHTML = "x2 = " + values.x2;
        }
    }
}