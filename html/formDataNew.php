<?php
if (isset($_POST['submit'])) {

  $email_address = $_POST['email'];

  if (empty($_POST['email'])) {
    echo "All fields required.";
  }elseif (empty($_POST['message'])){
    echo "All fields required.";
  }elseif (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address)){
    echo "Invalid email address.";
  }else{
    $to = 'petradevtest@gmail.com';
    $subject = 'contact form message';
    $message .= 'Email: ' . $_POST['email'] . "\r\n\r\n";
    $message .= 'Message: ' . $_POST['message'];
    $headers = "From: petradevtest@gmail.com\r\n";
    $headers .= 'Content-Type: text/plain; charset=utf-8';
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    if ($email) {
      $headers .= "\r\nReply-To: $email";
    }
    $success = mail($to, $subject, $message, $headers, '-fpetradevtest@gmail.com');
  ?>
    <!DOCTYPE HTML>
    <head>
      <link rel="stylesheet" type="text/css" href="../css/main.css">
    </head>
    <html>
    <body>
      <div class="emailResponseOuterContainer">
        <div class="emailResponseContainer">
  <?php if (isset($success) && $success) { ?>
          <div class="textHeading darkGrey-text">Thank You!</div>
          <br />
          <div class="textHeadingSmall mediumGrey-text">Your message has been sent.</div>
  <?php } else { ?>
          <div class="textHeading darkGrey-text">Oops.</div>
          <br />
          <div class="textHeadingSmall mediumGrey-text">Sorry, there was a problem sending your message.</div>
  <?php } ?>
          <br />
          <div class="backBtnContainer">
            <!-- <div class="submitBtn btn-darkGrey"> -->
              <a href="indexV11.html" class="submitBtn btn-darkGrey textBodyLg">back home</a>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </body>
    </html>
<?php
  }
}
?>
