$(document).ready(function() {
  if($.cookie('ignore_newsletter')) {
    $("#subscribe").hide();
		$("#footer_bg").removeClass('with_margin');
  }
  $("a#close").click(function(e) {
    e.preventDefault();
    $.cookie('ignore_newsletter', true, { expires: 7, path: '/' });      
		$("#footer_bg").removeClass('with_margin');
    $("#subscribe").fadeOut("slow");
  });
});