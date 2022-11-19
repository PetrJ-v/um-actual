(function($){
	
	const prepareDom = new Promise(function(resolve, reject){
		let data = $('.header-slider')
		
		$('body').removeClass('no-js')
		resolve(data)
		// if ($('body').hasClass('no-js') == false) {
		// }
	})
	async function setupSlider(){
		const response = await prepareDom //В response попадет блок со слайдером
		$('.header-slider').slick({
			lazyLoad: 'ondemand',
			autoplay: true,
			autoplaySpeed: 5000,
			prevArrow: '<button class="slide-arrow prev-arrow"><img class="" src="../img/icons/left-arrow.svg" alt=""></button>',
			nextArrow: '<button class="slide-arrow next-arrow"><img class="" src="../img/icons/right-arrow.svg" alt=""></button>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						dots: true
					}
				}
			]
		})
	}
	setupSlider()

	//Загрузка преподавателей---------------------start
	$.get('../html-components/teachers/teacher--ryzhova-m.html', function (data) {
		$('.teacher--ryzhova-m').append(data);
	});
	$.get('../html-components/teachers/teacher-info--ryzhova-m.html', function (data) {
		$('.teacher-info--ryzhova-m').append(data);
	});
	$.get('../html-components/teachers/teacher--andrey-p.html', function (data) {
		$('.teacher--andrey-p').append(data);
	});
	$.get('../html-components/teachers/teacher-info--andrey-p.html', function (data) {
		$('.teacher-info--andrey-p').append(data);
	});
	$.get('../html-components/teachers/teacher--roman-m.html', function (data) {
		$('.teacher--roman-m').append(data);
	});
	$.get('../html-components/teachers/teacher-info--roman-m.html', function (data) {
		$('.teacher-info--roman-m').append(data);
	});

	$.get('../html-components/teachers/teacher--mihail-k.html', function (data) {
		$('.teacher--mihail-k').append(data);
	});
	$.get('../html-components/teachers/teacher-info--mihail-k.html', function (data) {
		$('.teacher-info--mihail-k').append(data);
	});
	$.get('../html-components/teachers/teacher--svetlana-p.html', function (data) {
		$('.teacher--svetlana-p').append(data);
	});
	$.get('../html-components/teachers/teacher-info--svetlana-p.html', function (data) {
		$('.teacher-info--svetlana-p').append(data);
	});
	$.get('../html-components/teachers/teacher--olya-v.html', function (data) {
		$('.teacher--olya-v').append(data);
	});
	$.get('../html-components/teachers/teacher-info--olya-v.html', function (data) {
		$('.teacher-info--olya-v').append(data);
	});
	$.get('../html-components/teachers/teacher--vasiliy-b.html', function (data) {
		$('.teacher--vasiliy-b').append(data);
	});
	$.get('../html-components/teachers/teacher-info--vasiliy-b.html', function (data) {
		$('.teacher-info--vasiliy-b').append(data);
	});
	$.get('../html-components/teachers/teacher--marina-grib.html', function (data) {
		$('.teacher--marina-grib').append(data);
	});
	$.get('../html-components/teachers/teacher-info--marina-grib.html', function (data) {
		$('.teacher-info--marina-grib').append(data);
	});
	$.get('../html-components/teachers/teacher--galina-mish.html', function (data) {
		$('.teacher--galina-mish').append(data);
	});
	$.get('../html-components/teachers/teacher-info--galina-mish.html', function (data) {
		$('.teacher-info--galina-mish').append(data);
	});
	$.get('../html-components/teachers/teacher--maria-serg.html', function (data) {
		$('.teacher--maria-serg').append(data);
	});
	$.get('../html-components/teachers/teacher-info--maria-serg.html', function (data) {
		$('.teacher-info--maria-serg').append(data);
	});
	$.get('../html-components/teachers/teacher--veronika-naleta.html', function (data) {
		$('.teacher--veronika-naleta').append(data);
	});
	$.get('../html-components/teachers/teacher-info--veronika-naleta.html', function (data) {
		$('.teacher-info--veronika-naleta').append(data);
	});
	$.get('../html-components/teachers/teacher--sofiya-burceva.html', function (data) {
		$('.teacher--sofiya-burceva').append(data);
	});
	$.get('../html-components/teachers/teacher-info--sofiya-burceva.html', function (data) {
		$('.teacher-info--sofiya-burceva').append(data);
	});
	$.get('../html-components/teachers/teacher--inna-gorvat.html', function (data) {
		$('.teacher--inna-gorvat').append(data);
	});
	$.get('../html-components/teachers/teacher-info--inna-gorvat.html', function (data) {
		$('.teacher-info--inna-gorvat').append(data);
	});
	$.get('../html-components/teachers/teacher--ivan-chaban.html', function (data) {
		$('.teacher--ivan-chaban').append(data);
	});
	$.get('../html-components/teachers/teacher-info--ivan-chaban.html', function (data) {
		$('.teacher-info--ivan-chaban').append(data);
	});
	//Загрузка преподавателей-----------------------end

	// Вывод отзывов------------------------------start
	jQuery.ajax({
		type: "POST",
		dataType: "json",
		url: "/get-feedbacks.php",
		error: function (answer) {
			console.log(answer);
		},
		success: function (answer) {
			data = JSON.parse(answer);
			if ($(data).length == 0) {
				$('.feedbacks-wrapper').addClass('empty');
			}
			else{
				$.each(data, function (key, value) {
					$('<div class="feedback"><div class="feedback__date">' + value.date + '</div><div class="feedback__text">' + value.feedback + '</div><div class="feedback__autor">' + value.autor + '</div></div>').appendTo('.feedbacks');
				});
			}
		}
	});
	// Вывод отзывов--------------------------------end

	// $('#get-feedback__btn').on('click', function(e){}
	$('#new-feedback').on('submit', function(e){
		e.preventDefault();
		$('#g-recaptcha-response').attr('disabled');

		var feedbackData = $('#new-feedback').serialize(),
			captcha = grecaptcha.getResponse(),
			date = new Date().toLocaleDateString(), // 19.05.2020
			feedbackData = feedbackData + "&" + "date=" + date;

		if (!captcha.length) {
			$('#recaptchaError').text('* Вы не прошли проверку "Я не робот"');
		}
		else{
			jQuery.ajax({
				type: "POST",
				url: "write-feedbacks.php",
				data: feedbackData,
				error: function (answer) {
					alert(answer);
				},
				success: function (answer) {

					let currentFeedback = JSON.parse(answer),
						successMessage = $('.success-message'),
						feedbacksWrapper = $('.feedbacks-wrapper');

					//Сразу же, на глазах у пользователя, добавим новый отзыв в списко отзывов
					
					if (feedbacksWrapper.hasClass('empty')) {
						feedbacksWrapper.removeClass('empty');
					};
					$('<div class="feedback" style="display: none;"><div class="feedback__date">' + currentFeedback.date + '</div><div class="feedback__text">' + currentFeedback.feedback + '</div><div class="feedback__autor">' + currentFeedback.autor + '</div></div>').appendTo('.feedbacks').slideDown();

					//Проскролим список отзывов к последнему, чтобы пользователь увидел свой отзыв
					setTimeout(function () {
						let feedbacksArray = $('.feedback'),
							feedbacksCount = feedbacksArray.length, 
							lastFeedback = (feedbacksCount > 1) ? feedbacksArray[(feedbacksCount - 1)] : feedbacksArray[0];
							// lastFeedback = feedbacksArray[(feedbacksArray.length - 1)];

						$(".feedbacks").animate({ scrollTop: $(lastFeedback).offset().top }, 500);
					}, 500);

					successMessage.css('display', 'flex').hide().fadeIn(1000);
					setTimeout(function () {
						$('#new-feedback')[0].reset();
						successMessage.fadeOut(1000);
					}, 4000);
				}
			});
		};
	});
	$(document).ajaxStop(function () {
		//plugin configuration__________________________________start
		var $menu = $("#my-menu").mmenu(
			{
				// options
				offCanvas: { position: 'right' },
				navbar: { title: "Меню" },
			},
			{
				// configurations
				clone: true
			}
		),
		api = $menu.data("mmenu");

		api.bind("open:finish", function () {
			$('.hamburger').addClass('is-active');
		}).bind("close:finish", function () {
			$('.hamburger').removeClass('is-active');
		});
		//plugin configuration____________________________________end

		var scrollButtons = $('a.button_orange, a.button_blue').map(function () {
			if ($(this).attr('href').substring(0, 1) == '#') {
				return this;
			}
		}),
			menu = $('.menu__list'),
			navEl = $('.menu__list li a'),
			currentPage = location.href.substring(location.href.lastIndexOf('/') + 1),
			state = {
				page: currentPage
			};

		let navigateFunc = function (destination) {
			$(destination).length != 0
				? $('html, body').animate({ scrollTop: $(destination).offset().top }, 800) // анимируем скроолинг к элементу destination
				: location = '/' + destination;
		};
		navEl.each(function () {
			$(this).on('click', function (e) {

				e.preventDefault();
				let $this = $(this),
					destination = $this.attr('href');
				state = {
					page: destination,
				};
				history.pushState(state, '', state.page);
				navigateFunc(destination);

				menuUpdate(state);
				api.close();
			})
		});

		menuUpdate = function (state) {
			if (!state) return;
			if (state.page.indexOf('.html') != -1) {
				let urlPart = state.page.slice(0, -5),
					activeMenu = menu.find("li a[href='#" + urlPart + "']");

				activeMenu.addClass('menu__item_active');
				return;
			}

			navEl.each(function () {
				$this = $(this);
				if ($this.hasClass('menu__item_active'))
					$this.removeClass('menu__item_active');
				if ($this.attr('href') === state.page)
					$this.addClass('menu__item_active');
			})
		};
		menuUpdate(state);

		scrollButtons.each(function () {
			$(this).on('click', function () {
				destination = $(this).attr('href');
				navigateFunc(destination);
			});
		});

		findVideos();
	});

	rotateLogo = function(){
		setInterval(function(){
			let img = $('header').find('.top-line__logo-img');
			img.toggleClass('top-line__logo-img_active');
		}, 3000)
	}();
	
	//клики по кнопкам предметов____________________________
	subjectBtn = function(){
		var buttons = $('.subjects__button'),
			subjectsDescriptions = $('.subject-description');
		$('.subjects__button').on('click', function(e){
			e.preventDefault();
			var button = $(this),
				subject = $(this).attr('href'),
				descrName = 'subject-description--' + subject;

			buttons.removeClass('active');
			function hideActiveDescriptions(){
				var length = subjectsDescriptions.length;

				for ( i = 0; i < length; i++) {
					const element = subjectsDescriptions[i];
					
					if ($(element).hasClass('active')) {
						$(element).removeClass('active');
						if ($(element).hasClass(descrName)) {
							$(element).slideUp();
							return;
						}
						$(element).slideUp(400, showHiddenDescription);
						return;
					}
					else{
						if (i >= (length -1) ) {
							showHiddenDescription();
						}
					}
				}
			};
			hideActiveDescriptions();
			
			function showHiddenDescription(){
				let hiddenBlock = $('.' + descrName);

				hiddenBlock.slideToggle(400, function(){
					$(this).addClass('active');
					scrollTo(hiddenBlock, 400);
					// $('html, body').animate({ scrollTop: $('.' + descrName).offset().top }, 400);
				});
			};
			button.toggleClass('active');
			
		})
	}();
	$('.lang__button').on('click', function(){
		$('.subjects__buttons-wrapper--lang').slideToggle();
	})
	$('body').on('click', '.fa.fa-angle-double-down', function(){
		$this = $(this);
		$this.closest('.top-line')
			.find('.top-line__contacts')
			.slideToggle(scrollDown);
		function scrollDown(){
			//Прокрутим страницы вниз, только если раскрываем списко контактов в нижнем меню
			if ($this.hasClass('top-line__angle_slide-up') && $this.offset().top > 1000) {
					$('html, body').animate({ scrollTop: $('body').height()}, 2000);
			};
		};
		$this.toggleClass('top-line__angle_slide-up');
	});

	$(window).resize(function(){
		width = $('body').width();
		width >= 992
			? $('.top-line__contacts').css('display', 'block')
			: $('.top-line__contacts').css('display', '');
	});

	//Обработка submit кнопок-------------------
	function sendForm (form){
		// unserializedForm = form;
		var formData = form.serialize(),
		currentUrl = window.location.href;
		formData = formData + "&" + "siteAddres=" + currentUrl;//Добавляем в json строку с данными формы url текущей страницы
		// question = form.find($('textarea'));
		contactName = form.find($('input[name-from-calback-popup]'));
		contactPhone = form.find($('input[name=contact-phone]'));
		contactEmail = form.find($('input[name=contact-mail]'));
		if (contactName.length != 0) {//Если в активной форме есть input с заданным именем, то выполним проверку введенных в него данных
			if (!contactPhone.val()) {
				alert("Введите пожалуйста Ваше имя!")
				return "wrong input";
			};
		};
		if (contactPhone.length != 0) {//Если в активной форме есть input с заданным именем, то выполним проверку введенных в него данных
			if (!contactEmail.val() && !contactPhone.val()) {
				alert("Введите пожалуйста ваш телефон или email!")
				return "wrong input";
			};
		};

		if (question.length != 0) {//Проверили наличие элемента для ввода вопроса
			if (!question.val()) {//Проверили наличие введенных данных
				alert("Вы не задали ни одного вопроса.");
				return "wrong input";
			};
		};
		jQuery.ajax({
			type: "POST",
			url: "/mail.php",
			data: formData,
			error: function(answer){
				// console.log("not sended");
				console.log(answer);
			},
			success: function(answer){
				console.log(answer);
			}
		}).done(function() {
			// console.log(form);
			form.find($('.success')).css('display', 'flex').hide().fadeIn();
			// alert("Данные успешно отправлены!");
			// ga('send', 'pageview', '/thanks.html');
			setTimeout(function() {
				// $.fancybox.close();
				form.trigger("reset");//Сбрасываем поля формы
				form.find($('.success')).css('display', 'none');
				// succsessMessage.css('display', 'none');
			}, 3000);
		});
	};

	popupForms = $('#popup-form-calback');
	popupForms.each(function(){
		$(this).on('submit', function(e){
			e.preventDefault();
			sendForm($(this));
		});
	});
	
	// $('.small-image').fancybox();
	//----------------------------------------------------
	
	// video start--------------------------
	function findVideos() {
		let videos = document.querySelectorAll('.video');

		for (let i = 0; i < videos.length; i++) {
			setupVideo(videos[i]);
		}
	}

	function setupVideo(video) {
		let link = video.querySelector('.video__link');
		let media = video.querySelector('.video__media');
		let button = video.querySelector('.video__button');
		let id = parseMediaURL(media);

		video.addEventListener('click', () => {
			let iframe = createIframe(id);

			link.remove();
			button.remove();
			video.appendChild(iframe);
		});

		link.removeAttribute('href');
		video.classList.add('video--enabled');
	}

	function parseMediaURL(media) {
		let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i,
			regexp2 = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i, //на случай если видео было в плохом качестве и ютуб не создал табнейл в максимальном разрешении
			url = media.src,
			match = url.match(regexp) ? url.match(regexp) : url.match(regexp2);

		return match[1];
	}

	function createIframe(id) {
		let iframe = document.createElement('iframe');

		iframe.setAttribute('allowfullscreen', '');
		iframe.setAttribute('allow', 'autoplay');
		iframe.setAttribute('src', generateURL(id));
		iframe.classList.add('video__media');

		return iframe;
	}

	function generateURL(id) {
		let query = '?rel=0&showinfo=0&autoplay=1';

		return 'https://www.youtube.com/embed/' + id + query;
	}
	// video end--------------------------

	//Google map function

	// Функция загрузки API Google maps по требованию (в нашем случае при первом скроле страницы)
	function loadScript(url, callback) {
		var script = document.createElement("script");

		if (script.readyState) {  // IE
			script.onreadystatechange = function () {
				if (script.readyState == "loaded" ||
					script.readyState == "complete") {
					script.onreadystatechange = null;
					callback();
				}
			};
		} else {  // Другие браузеры
			script.onload = function () {
				callback();
			};
		}

		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	};

	function initMap() {	
		var um = new google.maps.LatLng(46.468667, 30.745792),
			centerPoint = {
				lat: 46.468667,
				lng: 30.745792,
			},
			myOption = {
				zoom: 17,
				center: centerPoint,
				disableDefaultUI: true,
				scrollwheel: false
			};
		var map = new google.maps.Map(document.getElementById('map'), myOption);

		var marker = new google.maps.Marker({
			position: um,
			map: map,
			animation: google.maps.Animation.DROP,
			title:"Учебный центр УМ",
		});

		var contentString = '<div id="gmap-marker-info">Учебный центр УМ.<br />Экспресс обучение.<br />Итальянский бульвар, 2.</div>';
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
		infowindow.open(map, marker);
	};

	var mapLoaded = false;

	//Подгрузим google map при первом скроле страницы пользователем.
	$(document).on('scroll', function(){
		if ($('#map').length != 0 && mapLoaded === false) {
			loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDFGDojkTOd_PSQmE3qwinLHD73yf0sUps', function () {
				initMap();
			});
			mapLoaded = true;
		};
	});

	$('body').on('click', '.teacher__more-btn', function(){
		
		let $this = $(this),
			teachers = $this.closest('.teachers'),
			teacherName = $this.closest('.teacher').attr('data-name'),
			hiddenInfo = teachers.siblings('.teacher-info--' + teacherName),
			scrollToInfo = function(){
				scrollTo(hiddenInfo, 400);
			},
			showInfo = function(){
				hiddenInfo.slideDown(scrollToInfo);
			};
		
		teachers.slideUp(showInfo);

	})
	$('body').on('click', '.teacher-info__close-btn', function(){
		
		let $this = $(this),
			teachersWrapper = $this.closest('.subject-description'),
			teachers = teachersWrapper.find('.teachers'),
			teacherInfo = $this.closest('.teacher-info'),
			scrollToTeachers = function(){
				scrollTo(teachers, 400);
			},
			showTeachers = function(){
				teachers.slideDown(scrollToTeachers);
			};
		
		teacherInfo.slideUp(showTeachers)
	})
	var scrollTo = function(dest, duration){
		$('html, body').animate({ scrollTop: dest.offset().top }, duration);
	};
})(jQuery);
