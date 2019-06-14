$(function(){
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e){
		$hamburger.toggleClass("is-active");
		$(".header-menu").toggleClass("header-menu_show");
	});
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ['<span class="icon-keyboard_arrow_left strelka"></span>','<span class="icon-keyboard_arrow_right strelka"></span>']
	});
	$(".nav").on("click", function(e){
		e.preventDefault();
		$(".drops-1").fadeToggle(500);
	});
	$(document).mouseup(function(e){
		var div = $(".nav");
		if(!div.is(e.target) && $(".drops-1").has(e.target).length === 0){
			$(".drops-1").hide();
		}
	});
	$(".Category-tab").show();
	$(".by-category").click(function(e){
		e.preventDefault();
		var tab = $(".Category-tab");
		tab.fadeToggle();
		$(".treugolnik").toggleClass("rotate");
	});
	tab($(".tab_content"),$(".tab_content:first"),$(".application_tab li:first a"), "tab_active",$(".application_tab li a"));
	tab($(".feature-info"), $(".feature-info:nth-child(2)"),$(".Category-tab li:nth-child(2) a"), "tab_active", $(".Category-tab li a"));

	function tab(content, first, firstA, tab_active, liA){
		content.hide();
		first.show();
		firstA.addClass(tab_active);
		$(liA).click(function(e){
			e.preventDefault();
			liA.removeClass(tab_active);
			$(this).addClass(tab_active);
			content.hide();
			var selectTab = $(this).attr("href");
			$(selectTab).show();
		});
	}
	$('a.yak').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
			// scrollTop: $(target).fadeIn()
		}, 1000);
	});
});
