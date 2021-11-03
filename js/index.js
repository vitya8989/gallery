function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});;
let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.nav');

burger.onclick = function () {
	nav.classList.toggle('open-menu');
};
let gallerySlider = new Swiper('.gallery-slider', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.gallery-slider__btn-next',
		prevEl: '.gallery-slider__btn-prev'
	},
	pagination: {
		el: '.gallery-slider__pagination',
		type: 'fraction',
	},
	autoHeight: true,
});

gallerySlider.on('slideChange', function () {
	addNull();
});



;
let eventsSlider = new Swiper('.events-slider', {
	slidesPerView: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: '.events-slider__btn-next',
		prevEl: '.events-slider__btn-prev'
	},
	pagination: {
		el: '.events-slider__pagination',
		type: 'fraction',
	},
	autoHeight: true,
});

eventsSlider.on('slideChange', function () {
	addNull();
});

;

function addNull() {
	let swiperPaginationCurrent = document.querySelectorAll('.swiper-pagination-current');
	let swiperPaginationTotal = document.querySelectorAll('.swiper-pagination-total');
	for (let i = 0; i < swiperPaginationCurrent.length; i++) {
		if (swiperPaginationCurrent[i].textContent < 10 && swiperPaginationCurrent[i].textContent[0] != 0) {
			swiperPaginationCurrent[i].textContent = `0${swiperPaginationCurrent[i].textContent}`;
		}
		if (swiperPaginationTotal[i].textContent < 10 && swiperPaginationTotal[i].textContent[0] != 0) {
			swiperPaginationTotal[i].textContent = `0${swiperPaginationTotal[i].textContent}`;
		}
	}
}

addNull();