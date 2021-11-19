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

let showHeadingBtn = document.querySelectorAll('.show-heading-btn');
let heading = document.querySelectorAll('.heading');

for (let i = 0; i < showHeadingBtn.length; i++) {
	showHeadingBtn[i].onclick = function () {
		for (let j = 0; j < showHeadingBtn.length; j++) {
			showHeadingBtn[j].classList.remove('disabled-btn');
			heading[j].classList.remove('show-heading');
		}
		showHeadingBtn[i].classList.add('disabled-btn');
		heading[i].classList.add('show-heading');
	}
}
