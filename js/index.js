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

reinitSwiper(gallerySlider);


;
let eventsSlider = new Swiper('.main-events-slider', {
	slidesPerView: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: '.main-events-slider__btn-next',
		prevEl: '.main-events-slider__btn-prev'
	},
	pagination: {
		el: '.main-events-slider__pagination',
		type: 'fraction',
	},
	autoHeight: true,
});

eventsSlider.on('slideChange', function () {
	addNull();
});

reinitSwiper(eventsSlider);
;
let aboutSlider = new Swiper('.about-slider', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.about-slider__btn-next',
		prevEl: '.about-slider__btn-prev'
	},
	pagination: {
		el: '.about-slider__pagination',
		type: 'fraction',
	},
});

aboutSlider.on('slideChange', function () {
	addNull();
});
;
let howFindTitle = document.querySelector('.how-find__title');
let howFindContent = document.querySelector('.how-find__content');
let howFindBody = document.querySelector('.how-find__body');

if (window.innerWidth < 1051) {
	howFindContent.append(howFindTitle);
}

window.onresize = function () {
	if (window.innerWidth < 1051) {
		howFindContent.append(howFindTitle);
	} else {
		howFindBody.prepend(howFindTitle);
	}
}

let scriptMap = document.createElement('script');
scriptMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=dd0f5e76-e8bb-42be-b558-f7af3b491cd2&lang=ru_RU';
setTimeout(() => document.head.append(scriptMap), 1000);
scriptMap.onload = function () {
	ymaps.ready(init);
};

function init() {
	var myMap = new ymaps.Map("map", {
		center: [59.920163, 30.346132],
		zoom: 17
	});
	var placemark = new ymaps.Placemark([59.920163, 30.346132], {
		iconColor: '#FF0000',
		iconCaption: 'Социалистическая ул., 21'
	}
	);
	myMap.geoObjects.add(placemark);
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
}
