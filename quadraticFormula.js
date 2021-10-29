function validateInput() {
  let field_a = document.getElementById("input_a");
  let field_b = document.getElementById("input_b");
  let field_c = document.getElementById("input_c");
  let value_a = field_a.value;
  let value_b = field_b.value;
  let value_c = field_c.value;

  checkField(field_a, value_a);
  checkField(field_b, value_b);
  checkField(field_c, value_c);
  
  if (value_a && value_b && value_c) {
    return {
      a: value_a,
      b: value_b,
      c: value_c,
    };
  }

  return null;
}

function checkField(field, value) { // will indicate if input is empty
    field.style.outline = !value ? "2px solid red" : "none";
}

function processInput() {
  let values = validateInput();
  if (values) {
    // Solve the quadratic equation
    const D = values.b * values.b - 4 * values.a * values.c;
    //console.log(values.a + " " + values.b + " " + values.c + " D = " + D);
    if (D > 0) {
      return {
        x1:
          (-values.b -
            Math.sqrt(Math.pow(values.b, 2) - 4 * values.a * values.c)) /
          (2 * values.a),
        x2:
          (-values.b +
            Math.sqrt(Math.pow(values.b, 2) - 4 * values.a * values.c)) /
          (2 * values.a),
        a: values.a,
        imaginary: false,
      };
    } else if (D == 0) {
      return {
        x1: -values.b / (2 * values.a),
        x2: -values.b / (2 * values.a),
        // a is needed to write the function in a(x-x1)(x-x2) format
        a: values.a,
        imaginary: false,
      };
    } else {
      // D < 0
      return {
        x_real: -values.b / (2 * values.a),
        x_imaginary1: -(Math.pow(values.b, 2) - 4 * values.a * values.c),
        x_imaginary2: 2 * values.a,
        a: values.a,
        imaginary: true,
      };
    }
  } else return null;
}

// Placeholder function - is subject to change,
// depending on the new front-end
function displayInput() {
  let values = processInput();
  if (values) {
    let displaySpan1 = document.getElementById("result_quadratic_x1");
    let displaySpan2 = document.getElementById("result_quadratic_x2");
    if (values.imaginary) {
      displaySpan1.innerHTML =
        "x1 = " +
        values.x_real +
        " - <i>i</i>(&Sqrt;" +
        values.x_imaginary1 +
        ")/" +
        values.x_imaginary2;
      displaySpan2.innerHTML =
        "x2 = " +
        values.x_real +
        " + <i>i</i>(&Sqrt;" +
        values.x_imaginary1 +
        ")/" +
        values.x_imaginary2;
    } else {
      displaySpan1.innerHTML = "x1 = " + values.x1;
      displaySpan2.innerHTML = "x2 = " + values.x2;
    }
  }
}
