var macCheck = navigator.userAgent.match(/Macintosh/i),
windowsCheck = navigator.userAgent.match(/Windows/i);

function checkArray(checkIfCombo) {
  if(macCheck) {
    var shiftKey = _.contains(checkIfCombo, 16);
    var commandKey = _.contains(checkIfCombo, 91);
    var fourKey       = _.contains(checkIfCombo, 52);
    var screenshotCombo = (shiftKey && commandKey) && fourKey;
    if(screenshotCombo) {
      alert('screenshot on Mac!')
      checkIfCombo = [];
      return true;
    }
    return false;
  }
  else if(windowsCheck) {
    var screenshotCombo = (_.contains(checkIfCombo, 116) && _.contains(checkIfCombo, 17)) || _.contains(checkIfCombo, 42);
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
