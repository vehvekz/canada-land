/*
 * libraries
 */

//= ../libs/jquery/dist/jquery.min.js

/*
 * Custom
 */

$(document).ready(function () {

	$(window).on('scroll', function(){
			var form = $('.footer-form'),
				formHeight = form.height(),
				footer = form.closest('.footer'),
				winTop = $(this).scrollTop();

			(winTop > 830) ? form.fadeIn(300).addClass('fixed') && footer.css('height', formHeight) : form.fadeOut(200, function(){$(this).removeClass('fixed')});
		});

	var navigation = function(){

		var itemLink = $('.header_nav a'),
			duration = 700;

		return {
			init: function(){
				this.setUpListeners();
			},
			setUpListeners: function(){
				itemLink.on('click', this.menuShow);
			},
			menuShow: function(e){
				e.preventDefault();
				navigation.showSection($(this).attr('href'), true);
			},
			showSection: function(section, isAnimate){
				var
					direction = section.replace(/#/, ''),
					reqSection = $('section').filter('[data-section="' + direction + '"]'),
					reqSectionPos = reqSection.offset().top;

				if (isAnimate) {
					$('body, html').animate({scrollTop: reqSectionPos}, duration);
				} else {
					$('body, html').scrollTop(reqSectionPos);
				}
			}
		}

	}();
	navigation.init();

});

