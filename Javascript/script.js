function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function currentState() {
  var currentState = document.getElementById('toggleButton');

  return currentState;
}

function toggle() {
  var currentState = document.getElementById('toggleButton');
  if (currentState.innerHTML == 'Helical') {
    currentState.innerHTML = 'Spur';
    // return true;
  } else {
    currentState.innerHTML = 'Helical';
    // return false;
  }
}

function calculateInvoluteInput() {
  var isHelical = currentState();
  if (isHelical == 'Spur') {
    return 0.014904383;
  } else {
    var pressureAngle = toRadians(
      parseFloat(document.getElementById('pressureAngle').value)
    );
    var helixAngle = toRadians(
      parseFloat(document.getElementById('helixAngle').value)
    );

    // Perform calculations
    var temp = Math.tan(pressureAngle) / Math.cos(helixAngle);
    var y = Math.atan(temp);
    var involute = temp - y;

    return involute;
  }
}

function MeasurementOfTeeth() {
  var module = parseFloat(document.getElementById('module').value);
  var pressureAngle = toRadians(
    parseFloat(document.getElementById('pressureAngle').value)
  );
  var z1 = parseFloat(document.getElementById('z1').value);
  var Newz2 = Math.round(z1 / 9 + 0.5) - 0.5;
  var involute = calculateInvoluteInput();

  let ans =
    module * Math.cos(pressureAngle) * (Math.PI * Newz2 + z1 * involute);

  console.log(Newz2);

  console.log('involute ' + involute);

  document.getElementById('valueOfTeeth').innerHTML =
    'Measurement of Teeth: ' + ans.toFixed(5);

  document.getElementById('MeasurementOverTeeth').innerHTML =
    'Measurement over Teeth: ' + (Newz2 + 0.5);
}

function PCD() {
  var module = parseFloat(document.getElementById('module').value);
  var z1 = parseFloat(document.getElementById('z1').value);
  var helixAngle = toRadians(
    parseFloat(document.getElementById('helixAngle').value)
  );
  ans = (z1 * module) / Math.cos(helixAngle);

  document.getElementById('ansDiv').innerHTML = 'PCD : ' + ans.toFixed(5);
  return ans;
}

function helixAngle() {
  var module = parseFloat(document.getElementById('module').value);
  var z1 = parseFloat(document.getElementById('z1').value);
  var helixAngle = toRadians(
    parseFloat(document.getElementById('helixAngle').value)
  );
}
