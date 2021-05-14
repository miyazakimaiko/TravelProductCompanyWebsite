// Remove video from the slide on small devices
$(".slide-4").each(function(){
  var width = $(window).width();
  var video = $(this);

  if (width < 768) {
    video.remove();
  }
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow');
}, 6000);