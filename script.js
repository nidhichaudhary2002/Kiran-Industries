function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function calculateInvalidInput() {
  // Get user input values
  var pressureAngle = toRadians(
    parseFloat(document.getElementById('pressureAngle').value)
  );
  var helixAngle = toRadians(
    parseFloat(document.getElementById('helixAngle').value)
  );

  // Perform calculations
  var temp = Math.tan(pressureAngle) / Math.cos(helixAngle);
  var y = Math.atan(temp);

  var invalidInput = temp - y;

  return invalidInput;
}

function MeasurementOfTeeth() {
  var module = parseFloat(document.getElementById('module').value);
  var pressureAngle = toRadians(
    parseFloat(document.getElementById('pressureAngle').value)
  );

  var z2 = parseFloat(document.getElementById('z2').value);
  var z1 = parseFloat(document.getElementById('z1').value);

  var invalidInput = calculateInvalidInput();
  console.log(invalidInput);

  let ans =
    module * Math.cos(pressureAngle) * (Math.PI * z2 + z1 * invalidInput);

  document.getElementById('ansDiv').innerHTML =
    'Measurement of Teeth: ' + ans.toFixed(5);
}
