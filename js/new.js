let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.nav');

burger.onclick = function () {
	nav.classList.toggle('open-menu');
	burger.classList.toggle('open-burger');
}
;
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

let onlyEng = document.querySelectorAll('.only-eng');

for (let i = 0; i < onlyEng.length; i++) {
	onlyEng[i].addEventListener('keyup', function () {
		this.value = this.value.replace(/[а-яё]/ig, '');
	});
}

let footerFormForm = document.querySelector('.footer-form-form');
let footerEmail = document.querySelector('.footer-email');
let footerPopup = document.querySelector('.footer-popup');
let footerPopupClose = document.querySelector('.footer-popup__close');

footerFormForm.onsubmit = function (e) {
	e.preventDefault();
	if (footerEmail.value == '') {
		footerEmail.classList.add('error-input');
	} else {
		footerPopup.classList.add('popup-open');
	}
}

footerPopupClose.onclick = function () {
	footerPopup.classList.remove('popup-open');
}

footerEmail.onfocus = function () {
	footerEmail.classList.remove('error-input');
};

let eventSlider = new Swiper('.event-slider', {
	speed: 600,
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

