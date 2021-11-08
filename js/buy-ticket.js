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
;

new Swiper('.date-slider', {
	slidesPerView: 'auto',
	spaceBetween: 30,
	simulateTouch: true,
	grabCursor: true,
	navigation: {
		nextEl: '.date-slider__btn-next',
		prevEl: '.date-slider__btn-prev'
	},
	breakpoints: {
		1199: {
			simulateTouch: false,
			grabCursor: false,
			slidesPerView: 10,
		},
	},
});

new Swiper('.time-slider', {
	slidesPerView: 'auto',
	spaceBetween: 30,
	simulateTouch: true,
	grabCursor: true,
	navigation: {
		nextEl: '.time-slider__btn-next',
		prevEl: '.time-slider__btn-prev'
	},
	breakpoints: {
		1199: {
			simulateTouch: false,
			grabCursor: false,
			slidesPerView: 10,
		},
	},
});

let smallerBtn = document.querySelectorAll('.smaller-btn');
let moreBtn = document.querySelectorAll('.more-btn');
let numberValue = document.querySelectorAll('.number-value');
let numberInput = document.querySelectorAll('.number-input');
let buyForm = document.getElementById('buy-form');

buyForm.onsubmit = function (event) {
	event.preventDefault();
}

for (let i = 0; i < smallerBtn.length; i++) {
	numberInput[i].value = numberValue[i].textContent;
	smallerBtn[i].onclick = function () {
		if (numberValue[i].textContent > 0) {
			numberValue[i].textContent = numberValue[i].textContent - 1;
			numberInput[i].value = numberValue[i].textContent;
		}
	}
	moreBtn[i].onclick = function () {
		numberValue[i].textContent++;
		numberInput[i].value = numberValue[i].textContent;
	}
}