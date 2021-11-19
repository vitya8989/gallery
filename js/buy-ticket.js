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

let onlyLetterRus = document.querySelectorAll('.only-letter-rus');
let onlyNumber = document.querySelectorAll('.only-number');


for (let i = 0; i < onlyLetterRus.length; i++) {
	onlyLetterRus[i].addEventListener('keyup', function () {
		this.value = this.value.replace(/[\w]/g, '');
	});
}

for (let i = 0; i < onlyNumber.length; i++) {
	onlyNumber[i].addEventListener('keyup', function () {
		this.value = this.value.replace(/[^0-9,\s,+]/g, "");
	});
}

let buyForm = document.getElementById('buy-form');
let buyFormName = document.querySelector('.buy-form-name');
let buyFormTel = document.querySelector('.buy-form-tel');
let buyFormEmail = document.querySelector('.buy-form-email');
let buyFormEmailRepeat = document.querySelector('.buy-form-email-repeat');
let buyTicketPopup = document.querySelector('.buy-ticket-popup');
let buyTicketPopupClose = document.querySelector('.buy-ticket-popup__close');

buyForm.onsubmit = function (e) {
	e.preventDefault();
	if (buyFormName.value == '') {
		buyFormName.classList.add('error-input');
	} else if (buyFormTel.value == '') {
		buyFormTel.classList.add('error-input');
	} else if (buyFormEmail.value == '') {
		buyFormEmail.classList.add('error-input');
	} else if (buyFormEmailRepeat.value == '') {
		buyFormEmailRepeat.classList.add('error-input');
	} else {
		buyTicketPopup.classList.add('popup-open');
	}
}

buyFormName.onfocus = function () {
	buyFormName.classList.remove('error-input');
}
buyFormTel.onfocus = function () {
	buyFormTel.classList.remove('error-input');
}
buyFormEmail.onfocus = function () {
	buyFormEmail.classList.remove('error-input');
}
buyFormEmailRepeat.onfocus = function () {
	buyFormEmailRepeat.classList.remove('error-input');
}

buyTicketPopupClose.onclick = function () {
	buyTicketPopup.classList.remove('popup-open');
}

let timeSlideQuestion = document.querySelectorAll('.time-slide__question');
let timeSlideAnswer = document.querySelectorAll('.time-slide__answer');

for (let i = 0; i < timeSlideQuestion.length; i++) {
	timeSlideQuestion[i].onmouseover = function (event) {
		timeSlideAnswer[i].classList.add('show-answer');
	};
	timeSlideQuestion[i].onmouseout = function (event) {
		timeSlideAnswer[i].classList.remove('show-answer');
	};
}