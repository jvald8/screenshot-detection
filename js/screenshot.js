var macCheck = navigator.userAgent.match(/Macintosh/i),
windowsCheck = navigator.userAgent.match(/Windows/i);

function checkArray(checkIfCombo) {
  if(macCheck) {
    var shiftKey = _.contains(checkIfCombo, 16),
    controlKey   = _.contains(checkIfCombo, 17),
    threeKey     = _.contains(checkIfCombo, 51),
    fourKey      = _.contains(checkIfCombo, 52);

    var commandKey   = navigator.userAgent.match(/Firefox/i) ? _.contains(checkIfCombo, 224) : _.contains(checkIfCombo, 91);

    var screenshotCombo = ((shiftKey && commandKey) && (fourKey || threeKey)) ||
    ((shiftKey && commandKey && controlKey) && (fourKey || threeKey));
    if(screenshotCombo) {
      alert('screenshot on Mac!')
      checkIfCombo = [];
      return true;
    }
    return false;
  }
  else if(windowsCheck) {
    var fFiveKey = _.contains(checkIfCombo, 116),
    controlKey = _.contains(checkIfCombo, 17),
    printScreenKey = _.contains(checkIfCombo, 42);

    var screenshotCombo = (fFiveKey && controlKey) || printScreenKey;
    if(screenshotCombo) {
      alert('screenshot on Windows!')
      checkIfCombo = [];
      return true;
    }
    return false;
  }
}

var checkIfCombo = [];

$(window).keydown(function(e) {
  e.preventDefault();
  checkIfCombo.push(e.which)
  console.log(checkIfCombo);
  if(checkArray(checkIfCombo)) {
    checkIfCombo = [];
  }
}).keyup(function(e) {
  checkIfCombo = checkIfCombo.filter(function(x) {
    return x !== e.which;
  })
  console.log(checkIfCombo)
})

