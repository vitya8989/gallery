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
	if (body.classList.contains('scroll-lock')) {
		unlockPadding();
	} else {
		lockPadding();
	}
}

let body = document.body;
let wrapper = document.querySelector('.wrapper');
let scrollBarWidth = window.innerWidth - wrapper.offsetWidth + "px";

function lockPadding() {
	body.classList.add('scroll-lock');
	wrapper.style.paddingRight = scrollBarWidth;
}
function unlockPadding() {
	body.classList.remove('scroll-lock');
	wrapper.style.paddingRight = "0";
};
let footerContacts = document.querySelector('.footer-contacts');
let footerMenu = document.querySelector('.footer-menu');
let footerTopContent = document.querySelector('.footer-top__content');
let footerSocial = document.querySelector('.footer-social');

if (window.innerWidth < 611) {
	footerTopContent.insertBefore(footerMenu, footerContacts);
}

window.onresize = function () {
	if (window.innerWidth < 611) {
		footerTopContent.insertBefore(footerMenu, footerContacts);
	} else {
		footerTopContent.insertBefore(footerMenu, footerSocial);
	}
}
;

let eventSlider = new Swiper('.event-slider', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.event-slider__btn-next',
		prevEl: '.event-slider__btn-prev'
	},
	pagination: {
		el: '.event-slider__pagination',
		type: 'fraction',
	},
});

eventSlider.on('slideChange', function () {
	addNull();
});

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

function reinitSwiper(swiper) {
	setTimeout(function () {
		swiper.update();
	}, 200);
}

reinitSwiper(eventSlider);

