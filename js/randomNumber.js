// random number generator 

/* controlInputs should be an object with the following parameters: 
   {
    min, (minimum value), entered with an input type="number" field
    max, (max value), entered with an input type="number" field
    isDecimal (will the randomly generated number be a decimal value or, if not, an integer), entered with a checkbox (?)
    }
//  Pass the control inputs object as the function argument, f.e: generateRandom({
                                                                                    min: document.getElementById("input_min").value,
                                                                                    max: document.getElementById("input_max").value,
                                                                                    isDecimal: document.getElementById("checkbox_isDecimal").value
                                                                                })
*/

function generateRandom(controlInputs) {
    if (controlInputs.min && controlInputs.max) {
        return (controlInputs.isDecimal) ? 
            Math.random() * (controlInputs.max - controlInputs.min) + controlInputs.min :
            Math.floor(Math.random() * (controlInputs.max - controlInputs.min + 1)) + controlInputs.min;
    }
}