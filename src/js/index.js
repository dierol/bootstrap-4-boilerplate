


var i = 1;
(function loop() {
  var bgimage = new Image();
  bgimage.src="../img/login"+i+".jpg";

  $(bgimage).on('load', function(){
      $(".login-image").css("background-image","url('"+$(this).attr("src")+"')").removeClass('invisible').addClass('animated fadeIn delay-1s');
  });

  if (3 === i) {
    i = 1;
  } else {
    i++;
  }
  console.log(i);
  setTimeout(loop, 3000);
})();
