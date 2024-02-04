function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function currentState() {
  var state = document.getElementById('toggleButton').innerHTML;
  return state;
}

function toggle() {
  var currentState = document.getElementById('toggleButton');
  if (currentState.innerHTML == 'Helical') {
    currentState.innerHTML = 'Spur';
  } else {
    currentState.innerHTML = 'Helical';
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
  var RandomModification = parseFloat(
    document.getElementById('RandomModification').value
  );
  var Newz2 = Math.round(z1 / 9 + 0.5) - 0.5;
  var involute = calculateInvoluteInput();

  if (RandomModification > module / 2) {
    Newz2++;
  }

  let ans =
    module * Math.cos(pressureAngle) * (Math.PI * Newz2 + z1 * involute) +
    RandomModification * Math.sin(pressureAngle);

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
