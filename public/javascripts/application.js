$(document).ready(function(){

  /// Share! ///
  $("#share img").mouseover(function(){
    $("#share_h").html($(this).attr('alt'));
  }).mouseout(function(){
    $("#share_h").html("Share");
  });
});
