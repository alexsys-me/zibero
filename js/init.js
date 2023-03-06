(function ($) {
	$.fn.HvrSlider = function () {
		return this.each(function () {
			var el = $(this);
			if (el.find('img').length > 1) {
				var hvr = $('<div>', {
					class: 'hvr',
					append: [
						$('<div>', {
							class: 'hvr__images',
							append: $('<div>', {
								class: 'hvr__sectors',
							}),
						}),
						$('<div>', {
							class: 'hvr__dots',
						}),
					],
					insertAfter: el,
					prepend: el,
				});
				var hvrImages = $('.hvr__images', hvr);
				var hvrImage = $('img', hvr);
				var hvrSectors = $('.hvr__sectors', hvr);
				var hvrDots = $('.hvr__dots', hvr);
				el.prependTo(hvrImages);
				hvrImage.each(function () {
					hvrSectors.prepend('<div class="hvr__sector"></div>');
					hvrDots.append('<div class="hvr__dot"></div>');
				});
				$('.hvr__dot:first', hvrDots).addClass('hvr__dot--active');
				var setActiveEl = function (el) {
					hvrImage.hide().eq(el.index()).show();
					$('.hvr__dot', hvrDots).removeClass('hvr__dot--active').eq(el.index()).addClass('hvr__dot--active');
				};
				$('.hvr__sector', hvrSectors).hover(function () {
					setActiveEl($(this));
				});
				hvrSectors.on('touchmove', function (e) {
					e.preventDefault();
					var position = e.originalEvent.changedTouches[0];
					var target = document.elementFromPoint(position.clientX, position.clientY);
					if ($(target).is('.hvr__sector')) {
						setActiveEl($(target));
					}
				});
			}
		});
	};
})(jQuery)

function testJump(x) {
	var ml = ~~x.getAttribute('maxlength');
	if (ml && x.value.length >= ml) {
		do {
			x = x.nextSibling;
		}
		while (x && !(/text/.test(x.type)));
		if (x && /text/.test(x.type)) {
			x.focus();
		}
	}
}

$(document).ready(function () {

	// SWICHMENU ----------------
	$(".menu-triger").click(function () {
		$(".main-menu").slideToggle(200);
	});

	$(".main-menu .close").click(function () {
		$(".main-menu").slideToggle(200);
	});
	$(".rightcol-trigger").click(function () {
		$('.rightcol').toggle(300);
		//$('.rightcol').toggle("slide", {direction: "left" }, 1000);
	});
	$(".rightcol .close").click(function () {
		$(".rightcol").toggle(200);
	});

	// TABS ----------------
	$('.tabsauth').tabs();
	$('.pre-tabs').tabs();
	$('.tabs').tabs({
		// swipeable: true
	});

	// FORMS ----------------
	// $(".phone").mask("+7 (999) 999 - 9999");
	$('select').formSelect();
	$('.spinner').carousel({
		dist: -20,
		numVisible: 3,
		indicators: true,
		shift: 20,
		padding: 20
	});
	// MODALS ----------------
	$('.modal').modal();
	$('.dropdown-trigger').dropdown();
	// MODALS noclose click----------------
	$('.modal').modal();
	$('.dropdown-trigger.noclose').dropdown({
		closeOnClick: false,
		onCloseEnd: function () {
			console.log('Modal closed');


		},
	});
	$("#trigger-id-change").click(function () {
		console.log('223');

		$("#verifi-phone").dropdown().open(1);
	});
	/*
	$(function () {
		$('.resize').resizable({
			handles: 'se',
			maxWidth: 581,
			minHeight: 120,
			minWidth: 581
		})
	});
 */


	$(document).ready(function () {
		$('.tooltipped').tooltip();
	});
	//========Open filter================================================================================================================================

	$("#triger-open-filters").click(function () {
		$("#filter-category").toggleClass("active");
	});
	$("#triger-open-filters-region").click(function () {
		$("#filter-region").toggleClass("active");
	});
	$("#triger-open-filters-region2").click(function () {
		$("#filter-region-promo").toggleClass("active");
	});
	// ACCORDION ----------------
	$('.expand').collapsible({
		accordion: false
	});

	$('.accord').collapsible({
		// accordion: false
	});

	$('.collapsible').collapsible({
		accordion: false
	});
	// SLIDERS ----------------
	$('.slider').slick();
	//------------------------------------------
	$('.newbrands').slick({
		infinite: true,
		slidesToShow: 6
	});

	//------------------------------------------
	$('.eshop').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5
	});
	//  ----------------
	$('.seelater').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5
	});

	$('.countries').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6
	});

	//  ----------------
	$('.blog-our').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4
	});


	//------------------------------------------
	//  ----------------

	$('.scase1').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6
	});



	//------------------------------------------
	$('.snew').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6
	});


	//------------------------------------------
	$('.scase3').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6
	});

	//------------------------------------------

	$('.kategory').slick({
		infinite: true,
		slidesToShow: 8,
		slidesToScroll: 8
	});






	//$('.images').HvrSlider();
	//  $('.zoom').zoom();



	$('.header-cat-slider').slick({

		infinite: true,
		slidesToShow: 8,
		slidesToScroll: 1,
		variableWidth: true
	});

});