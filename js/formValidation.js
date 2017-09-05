// form validation

function validateForm() {
  var x = document.forms['contactForm']['email'].value;
  var atPos = x.indexOf('@');
  var dotPos = x.lastIndexOf('.');
  var y = document.forms['contactForm']['message'].value;
  if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= x.length || y == "" || y == null) {
    return false;
  } else if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= x.length || x == "" || x == null) {
    return false;
  }
}
