// JavaScript Document

//cufon font replacement class/id
Cufon.replace('h1,h2,h3,h4,#header_top p,.circle p',{textShadow: '0px 1px 0px #f0f0f0'});    
Cufon.replace('.button_1 a',{textShadow: '0px 1px 0px #ffc028'}); 

$(document).ready(function(){
	mpq.track('visited');

	$(".buynow").click(function(e){
		href = $(this).children('a').attr('href');
    e.preventDefault();
    mpq.track('clicked buy now',{},function() {
			location.href = href
		});
 	});

	//Fancybox for image gallery
	$("a[rel=next]").fancybox({
			'opacity'		: true,
			'overlayShow'	       : true,
			'overlayColor': '#000000',
			'overlayOpacity'     : 0.9,
			'titleShow':true,
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic'
	});

	//Subscribe form
	$(function() {
			var v = $("#subform").validate({
				submitHandler: function(form) {
					$(form).ajaxSubmit({
						target: "#result_sub",
						clearForm: true
					});
				}
			});
		
	});	
	$('#subform #email').val('');

	//On Hover Event for gallery, social
	$('ul.gallery li img,.social li a img').hover(function(){
				$(this).animate({opacity: 0.6}, 300);
			}, function () {
				$(this).animate({opacity: 1}, 300);
	});

	//Tipsy plugin
	$(' .tipsy_hover').tipsy({fade: true, gravity: 's'});
	
	$("a[rel^='external']").each(function() {
    $(this).attr("target","_blank");
  });
});
