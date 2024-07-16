function Mobile_popup_close(){	
  window.close();
}

var magnificInit = function(){
	$('.popup_link').magnificPopup({
		type: 'ajax',
		overflowY: 'scroll'
	});
};

var wow = new WOW({
	boxClass: 'wow', // animated element css class (default is wow)
	animateClass: 'animated', // animation css class (default is animated)
	offset: 50, // distance to the element when triggering the animation (default is 0)
	mobile: true, // trigger animations on mobile devices (default is true)
	live: true, // act on asynchronously loaded content (default is true)
	callback: function (box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	},
	scrollContainer: null // optional scroll container selector, otherwise use window
});

var wowrap = $('.wowrap');

$(wowrap).each(function () {
	$(this).find('.wow').each(function (index) {
		var eq = (index) / 5 + "s"; //2.5s 씩 추가
		$(this).attr('data-wow-delay', eq);
	});
	$(this).find('.animated').each(function (index) {
		var eq = (index) * 250;
		$(this).attr('data-id', 'delay-' + eq);
	});
});

/*
gnb
*/
var nav = {
	init: function(){
		this.on();
		this.sub();
	},
	on: function(){
		var url = window.location.href.split('/'),
				depth1 = url[url.length - 2],
				depth2 = url[url.length - 1].split('.')[0];

		$('.nav .depth01 > a').each(function(){
			var href = $(this).attr('href').split('/'),
					thisDepth1 = href[href.length - 2],
					thisDepth2 = href[href.length - 1].split('.')[0];

			if ( depth1 == thisDepth1 ) {
				$(this).addClass('on');

				if ( depth2 != "junior" ) {
					if ( thisDepth2 == "junior" ) {
						$(this).removeClass('on');
					}
				} else {
					if ( thisDepth2 != "junior" ) {
						$(this).removeClass('on');
					}
				}
			}
		});

		$('.page-nav .page-nav-item > a').each(function(){
			var href = $(this).attr('href').split('/'),
					thisDepth2 = href[href.length - 1].split('.')[0];

			if ( depth2 == thisDepth2 ) {
				$(this).parent().addClass('on');
				$(this).children('[class^=icon-]').addClass('on');
			}
		});
	},
	sub: function(){
		var $depth01 = $('.depth01.hasChild > a'),
				$navBtn = $('.btn-nav'),
				$navClose = $('.nav-close');
		
		$depth01.on('click', function(e){
			e.preventDefault();

			$(this).toggleClass('open').parent().siblings('.depth01.hasChild').children('a').removeClass();
			$(this).siblings('.depth02').stop(true,true).slideToggle().parent().siblings('.depth01.hasChild').children('.depth02').stop(true,true).slideUp();
		});

		$navBtn.on('click', function(){
			$('.nav').addClass('on');
		});

		$navClose.on('click', function(){
			$('.nav').removeClass('on');
		});
	}
};

var navMobile = { // 아코디언
	init: function () {
		this.moAction();
	},
	moAction: function () {
		var depth_1 = $('.mo_gnb_wrap .depth01:not(._down)');
		var depth_2 = $('.mo_gnb_wrap .depth02_box');
		var depth_3 = $('.mo_gnb_wrap .depth03');
		var depth_1_down = $('.mo_gnb_wrap .depth01._down');
		var depth_2_down = $('.mo_gnb_wrap .depth02._down');
		var nav_bg = $('.nav_bg');

		$(depth_2).hide();
		$(depth_3).hide();
		// $(nav_bg).hide();

		$(depth_1).children('a').click(function () {
			if ($(this).next('div').css('display') === 'none') {
				$(depth_1).children('a').removeClass('selected1');
				$(this).addClass('selected1');
				$(depth_3).hide();
				$(depth_2_down).children('a').removeClass('selected2');
				$(depth_2).slideUp(300);
				$(this).next().stop().slideDown(300);
			} else {
				$(this).next('div').slideUp(200);
				$(depth_1).children('a').removeClass('selected1');
			}
			return false;
		});

		$(depth_2_down).children('a').click(function () {
			if ($(this).next('div').css('display') === 'none') {
				$(depth_2_down).children('a').removeClass('selected2');
				$(this).addClass('selected2');
				$(depth_3).slideUp(300);
				$(this).next().stop().slideDown(300);
			} else {
				$(this).next('div').slideUp(200);
				$(depth_2_down).children('a').removeClass('selected2');
			}
			return false;
		});


		var navopen = $('.m_nav_btn_box .nav_btn');
		// var navclose = $('.m_nav_btn_box .on');
		var navclose = $('.nav_btn.on.close');
		ToggleMoNav = function () {
			$('.mo_gnb_wrap').toggleClass('on');
			$('.header').toggleClass('on');
			$(nav_bg).toggleClass('on');
			$(navopen).toggleClass('on');
			$(depth_2).hide();
			$(depth_1).children('a').removeClass('selected1');
			$(depth_2_down).children('a').removeClass('selected2');
			$('html').toggleClass('htmloverflow');
		}
		$(navopen).on('click', function () {
			ToggleMoNav();
		});
		$(navclose).on('click', function () {
			ToggleMoNav();
		})
		$(nav_bg).on('click', function () {
			ToggleMoNav();
		})
		// $(depth_1_down).on('click',function(){ ToggleMoNav();})
	}
};


var tabFun = {
	init: function () {
		this.tab();
	},
	tab: function () {
		var $tabItem = $('.tab .tab-header .tab-item');

		$tabItem.on('click', function(){
			var $tabContent = $(this).parents('.tab').find('.tab-content'),
					index = $(this).index();

			$(this).addClass('on').siblings().removeClass('on');
			$tabContent.eq(index).addClass('on').siblings().removeClass('on');
		});
	}
};


var mainScroll = {
	init: function () {
		this.Scroll_01();
	},
	Scroll_01: function () {
		$('.scroll-con-y').mCustomScrollbar({
			axis: 'y',
			advanced: {
				autoExpandHorizontalScroll: true
			}
		});
	}
};


var btnFun = {
	init: function () {
		this.btn01();
		this.btn02();
	},
	btn01: function () {
		var btn = $(".search_btn .btn");
		$(btn).click(function () {
			$(this).toggleClass('on');
			$('.search_bx').toggleClass('on');
		});
	},
	btn02: function () {
		var btn = $(".prd_filter_wrap_btn .btn");
		var btnclose = $(".prd_filter_wrap .btn");
		var bg = $(".prd_filter_bg");

		ToggleNav = function () {
			$('.prd_filter_wrap').toggleClass('on');
			$(bg).toggleClass('on');
			// $('.header').toggleClass('on');
			// $(nav_bg).toggleClass('on');
			// $(navopen).toggleClass('on');
			// $(depth_2).hide();
			// $(depth_1).children('a').removeClass('selected1');
			// $(depth_2_down).children('a').removeClass('selected2');
			$('html').toggleClass('htmloverflow');
			return false;
		}
		$(btn).click(function () {
			ToggleNav()
		});
		$(bg).click(function () {
			ToggleNav()
		});
		$(btnclose).click(function () {
			ToggleNav()
		});
	}
}

var swiper = {
	init: function(){
		this.main();
		this.sub();
	},
	main: function(){
		// 학습 프로세스 슬라이드
		var procCard = new Swiper('.process-card-group', {
			loop: true,
			pagination: {
				el: '.process-card-group .swiper-pagination',
				type: 'bullets',
				clickable: true
			}
		});

		// 강사진 슬라이드
		var teacher = new Swiper('.main-teacher-wrap', {
			loop: true,
			centeredSlides: true,
			slidesPerView: 1.5,
			spaceBetween: 20,
			pagination: {
				el: '.main-teacher-wrap .swiper-pagination',
				type: 'bullets',
				clickable: true
			}
		});

		// 후기 슬라이드
		var review = new Swiper('.review-wrap', {
			loop: true,
			centeredSlides: true,
			slidesPerView: 1.5,
			spaceBetween: 20,
			pagination: {
				el: '.review-wrap .swiper-pagination',
				type: 'bullets',
				clickable: true
			}
		});
	},
	sub: function(){
		// 주니어 전문 강사진 인터뷰 슬라이드
		var interviewSwiper = new Swiper('.interview-swiper .swiper-container', {
			loop: true,
			navigation: {
				prevEl: '.interview-swiper .swiper-button-prev',
				nextEl: '.interview-swiper .swiper-button-next'
			},
			on: {
				slideChangeTransitionEnd: function(){
					var $this = $(this)[0].$el,
							link = $this.find('.swiper-slide-active a').attr('href');

					$('.interview-swiper .swiper-frame').attr('href',link);
				}
			}
		});
	}
}

var subFun = {
	init: function () {
		this.type03();
	},
	type03: function () {

		var url = window.location.href;
		src = url.split('/')[url.split('/').length - 1].split('.')[0];
		src01 = url.split('/')[url.split('/').length - 2];
		var gnb_link_01 = $('.sub_menu_type_c .depth .depth01').children('a');
		gnb_link_01.each(function () {
			var this_href = $(this).attr('href');
			var href = this_href.split('/')[this_href.split('/').length - 2];
			if (href == src01) {
				$(this).addClass('on');
				$(this).siblings('.depth02_box').addClass('on');
			} else {
				$(this).removeClass('on')
			}
		});

		var btn = $('.btn_sub_menu');
		var con = $('.sub_menu_list');

		$(btn).click(function () {
			$(con).slideToggle();
		})
		var btn = $('.sub_menu_type_c .btn_sub_menu');
		var des = $('.sub_menu_type_c .updown_list .des_con');
		var btn_list = $('.sub_menu_type_c .updown_list .des_con a');

		//dep1
		var onDep01 = $('.sub_menu_type_c  .li_01 .depth01 > a.on').text();
		$('.sub_menu_type_c .li_01 .btn_sub_menu').text(onDep01);

		//dep2

		var onDep02 = $('.depth02_box a.on').text();
		if ($('.depth02_box a.on').length > 0) {
			$('.sub_menu_type_c .li_02:not(._manual) .btn_sub_menu').text(onDep02);
		} else {
			$('.sub_menu_type_c .li_02').hide();
		}

		// dep3
		// var onDep03 = $('.sub_dep03 a.on').text();
		// $('.sub_menu_type_c .li_03 .btn_sub_menu').text(onDep03);

		$('.sub_menu_type_c .updown_list > li').each(function () {
			$(this).find('.btn_sub_menu').click(function () {
				// $(this).find('.btn_sub_menu').on('mouseover',function() {
				if ($(this).hasClass('on') == true) {
					$(this).removeClass('on');
					$(this).next().stop().hide(); //slideUp();
				} else {
					$(des).stop().hide(); //slideUp();
					$(btn).removeClass('on');
					$(this).next().stop().show(); //slideDown();
					$(this).addClass('on');
				}
				return false;
			});
			$(this).find('.des_con a').click(function () {
				$(this).find('.des_con a').removeClass('on');
				// var onLinkTextThis = $(this).text();
				$(this).addClass('on');
				// $(this).parent().parent().parent().prev().text(onLinkTextThis);
				$(this).parent().parent().parent().hide(); //slideUp();
				$(btn).removeClass('on');
			});
		})
	}
}

var lnbFun = {
	init: function () {
		this.lnbClick();
	},
	lnbClick: function () {
		var lnb_01 = $('.prd_left_nav .lnb > li'),
			lnb_02 = $('.prd_left_nav .lnb > li .lnb_depth02'),
			lnb_03 = $('.prd_left_nav .lnb > li .lnb_depth03'),
			last_fo = $('.prd_left_nav .lastfocus'),
			first_fo = $('.prd_left_nav .firstfocus'),
			lnburl = location.pathname;

		$(lnb_01).children('a').click(function () {
			if ($(this).next("ul").length > 0) {
				if ($(this).next('ul').css('display') === 'none') {
					$(lnb_01).children('a').removeClass('active');
					$(this).addClass('active');
					$(lnb_02).children('a').removeClass('active');
					$(lnb_02).slideUp(300);
					$(this).next().stop().slideDown(300);
				} else {
					$(this).next('ul').slideUp(200);
					// $(lnb_01).children('a').removeClass('active');
				}
				return false;
			} else {
				$(this).addClass('active');
			}
		});
		$(lnb_02).children('li').children('a').click(function () {
			if ($(this).next("ul").length > 0) {
				if ($(this).next('ul').css('display') === 'none') {
					// $(lnb_03).children('li').children('a').removeClass('active');
					$(this).addClass('active');
					// $(lnb_03).children('a').removeClass('active');
					$(lnb_03).slideUp(300);
					$(this).next().stop().slideDown(300);
				} else {
					$(this).next('ul').slideUp(200);
					// $(lnb_03).children('li').children('a').removeClass('active');
				}
				return false;
			} else {
				$(this).addClass('active');
			}
		});



		$('.prd_left_nav .lnb > li').each(function () {
			if ($(this).find('.lnb_depth02 .active').length > 0) {
				//2dep active시 노출
				$(this).find('.lnb_depth02').show();
			}
			if ($(this).find('.lnb_depth03 .active').length > 0) {
				//3dep active시 노출
				$('.lnb_depth03 .active').closest('.lnb_depth03').show();
				$('.lnb_depth03 .active').closest('.lnb_depth02').show();
				// $('.lnb_depth03 .active').closest('.lnb_depth03').show();
				$('.lnb_depth03 .active').parent().parent().prev('a').addClass('chk');
				// $(this).find('.lnb_depth03').show();
			}

			if ($(this).children('a').next("ul").length > 0) {
				// $(this).addClass('_up');
			} else {
				//하위메뉴 없음
				$(this).children('a').addClass('_down');
			}
		})
	}
};

var quick = {
	init: function(){
		this.over();
	},
	over: function(){
		$('.quick').on({
			mouseenter: function(){
				$(this).addClass('on');
				$(this).children('.quick-box').stop(true,true).slideDown();
			},
			mouseleave: function(){
				$(this).removeClass('on');
				$(this).children('.quick-box').stop(true,true).slideUp();
			}
		});
	}
}

var chart = {
	init: function(){
		this.on();
	},
	on: function(){

		var radiusBackground = function() {
			var self = this;
		
			self.draw = function(chartInstance) {
				if(chartInstance.options.radiusBackground) {
					var x = chartInstance.chart.canvas.clientWidth / 2,
							y = chartInstance.chart.canvas.clientHeight / 2,
							ctx = chartInstance.chart.ctx;
		
					ctx.beginPath();
					ctx.arc(x, y, chartInstance.outerRadius - (chartInstance.radiusLength / 2), 0, 2 * Math.PI);
					ctx.lineWidth = chartInstance.radiusLength;
					ctx.strokeStyle = chartInstance.options.radiusBackground.color || '#d1d1d1';
					ctx.stroke();
				}
			};
		
			// see http://www.chartjs.org/docs/#advanced-usage-creating-plugins for plugin interface
			return {
				beforeDatasetsDraw: self.draw,
				onResize: self.draw
			}
		};
		
		// Register with Chart JS
		Chart.plugins.register(new radiusBackground());

		if ( document.getElementById('myChart') ) {
			var ctx = document.getElementById('myChart');

			window.chartConfig = {
				type: 'doughnut',
				data: {
					datasets: [{
						data: [0,0],
						backgroundColor: [
							'#fe6103',
							'transparent'
						],
						hoverBackgroundColor: [
							'#fe6103',
							'transparent'
						],
						borderColor: [
							'fe6103',
							'transparent'
						],
						hoverBorderColor: [
							'#fe6103',
							'transparent'
						],
						borderWidth: 0
					}],
				},
				options: {
					radiusBackground: {
						color: '#d1d1d1' // Set your color per instance if you like
					},
					legend: false,
					label: false,
					tooltips: {
						enabled: false
					}
				}
			};
			
			window.myDoughnutChart = new Chart(ctx, window.chartConfig);
		}
	}
}

var favorite = {
	init: function(){
		this.on();
	},
	on: function(){
		var $favorite = $('.icon-favorite.clickable');

		$favorite.on('click', function(){
			$(this).toggleClass('on');
		});
	}
}

var toeic = {
	init: function(){
		this.result();
	},
	result: function(){
		var scrollFlag = 1;

		$(window).on('scroll', function(){
			if ($('.chart-box').length > 0) {
				if ( scrollFlag == 1 ) {
					if ( $('.chart-box').offset().top < $(this).scrollTop() + $(this).height()/2 ) {
						var pointInputValue = $('.point-input').val();
						var point = pointInputValue.replace('점','');
						var total = 100 - parseInt(point);
						var newDataset = {
							data: [point,total],
							backgroundColor: [
								'#fe6103',
								'transparent'
							],
							hoverBackgroundColor: [
								'#fe6103',
								'transparent'
							],
							borderColor: [
								'fe6103',
								'transparent'
							],
							hoverBorderColor: [
								'#fe6103',
								'transparent'
							],
							borderWidth: 0
						};
	
						window.chartConfig.data.datasets.splice(0, 1);
						window.chartConfig.data.datasets.push(newDataset);
	
						window.myDoughnutChart.update();
	
						scrollFlag = 0;
					}
				}
			}
		});
	}
}

$(document).ready(function () {
	wow.init();
	wowrap.init();
	nav.init();
	navMobile.init();
	tabFun.init();
	mainScroll.init();
	btnFun.init();
	swiper.init();
	subFun.init();
	lnbFun.init();
	quick.init();
	chart.init();
	favorite.init();
	toeic.init();

	// Maginific Popup Initialize
	new magnificInit();

	$(".datepicker").datepicker({
		showMonthAfterYear: true,
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		weekHeader: 'Wk',
		dateFormat: 'yy-mm-dd',
		prevText: '이전 달',
		nextText: '다음 달',
		changeMonth: true,
		changeYear: true 
	});

	$('.btn-datepicker').on('click', function(){
		$('.datepicker').focus();
	});

	//시작팝업
	if ($(window).width() > 1024) {
		$(".start_pop").draggable({
			handle: ".modal-header"
		});
	}

	let sFlag = 1;

	function countUpper($el,startValue,endValue,delay){
		if ( startValue < endValue ){
			setTimeout(function(){
				startValue++;
				$el.text(startValue);
				countUpper($el,startValue,endValue,delay);
			},delay);
		}
	}

	$(window).on('scroll load resize', function(){
		if ( $('.scrollOnWrap').length > 0 ) {
			var std = $('.scrollOnWrap').offset().top;

			if ( $(this).scrollTop() > std - 200 ){
				if ( sFlag ){
					countUpper($('.counter-up1'),0,20,30);

					setTimeout(function(){
						countUpper($('.counter-up2'),0,38,25);
					},500)

					setTimeout(function(){
						countUpper($('.counter-up3'),0,58,20);
					},1000)

					setTimeout(function(){
						countUpper($('.counter-up4'),0,98,15);
					},1500)

					sFlag = 0;
				}
			} else {
				if ( sFlag == 0 ){
					$('.counter-up1, .counter-up2, .counter-up3, .counter-up4').text('0');
					sFlag = 1;
				}
			}
		}
	});

	$(window).on('scroll resize load', function(){
		if ( $('.scrollOnWrap').length > 0 ) {
			var $wrap = $('.scrollOnWrap'),
				wrapTop = $wrap.offset().top,
				distance = 200;
				$children = $wrap.find('.scrollOn');
		
			if ( $(this).scrollTop() > wrapTop - distance ) {
				$children.addClass('ani-on');
				$('.memory-group').addClass('arrow-on');
			} else {
				$children.removeClass('ani-on');
				$('.memory-group').removeClass('arrow-on');
			}
		}
	});
});
