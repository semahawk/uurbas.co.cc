$(document).ready(function(){

  // check if #alert is empty
  if(!$("#alert").html()){
    $("#alert").removeClass("alert");
  } else {
    $("#alert").addClass("alert");
  }

  // check if #notice is empty
  if(!$("#notice").html()){
    $("#notice").removeClass("notice");
  } else {
    $("#notice").addClass("notice");
  }

  /// Share! ///
  $("#share img").mouseover(function(){
    $("#share_h").html($(this).attr("alt"));
  }).mouseout(function(){
    $("#share_h").html("Share");
  });

  /// Contact buttons ///
  $("ul#contact img").mouseover(function(){
    var offset_top  = $(this).offset().top;
    var offset_left = $(this).offset().left;

    $("body").prepend("<div id='dummy' style='font-style: italic; color: #666; opacity: 0; position: fixed; top: " + (offset_top + 7) + "px; left: " + (offset_left + 40) + "px;'>" + $(this).attr("alt") + "</div>");

    $("#dummy").animate({
      opacity: 1,
      left: '+=10'
    }, {
      duration: 450,
      easing: 'easeOutBounce',
      complete: function(){
        // after animating
      }
    });
  }).mouseout(function(){
    $("#dummy").animate({
      opacity: 0,
      left: '-=10'
    }, {
      duration: 200,
      easing: 'easeInSine',
      complete: function(){
        // after fading
      }
    });
  });
});
