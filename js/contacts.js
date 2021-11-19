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

let contactsTitle = document.querySelector('.contacts__title');
let contactsRow = document.querySelector('.contacts__row');
let contactsBody = document.querySelector('.contacts__body');

if (window.innerWidth < 851) {
	contactsRow.append(contactsTitle);
}

window.onresize = function () {
	if (window.innerWidth < 851) {
		contactsRow.append(contactsTitle);
	} else {
		contactsBody.prepend(contactsTitle);
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

let contactsForm = document.getElementById('contacts-form');
let contactsName = document.querySelector('.contacts-name');
let contactsTel = document.querySelector('.contacts-tel');
let contactsEmail = document.querySelector('.contacts-email');
let contactsPopup = document.querySelector('.contacts-popup');
let contactsPopupClose = document.querySelector('.contacts-popup__close');

contactsForm.onsubmit = function (e) {
	e.preventDefault();
	if (contactsName.value == '') {
		contactsName.classList.add('error-input');
	} else if (contactsTel.value == '') {
		contactsTel.classList.add('error-input');
	} else if (contactsEmail.value == '') {
		contactsEmail.classList.add('error-input');
	} else {
		contactsPopup.classList.add('popup-open');
	}
}

contactsName.onfocus = function () {
	contactsName.classList.remove('error-input');
}
contactsTel.onfocus = function () {
	contactsTel.classList.remove('error-input');
}
contactsEmail.onfocus = function () {
	contactsEmail.classList.remove('error-input');
}

contactsPopupClose.onclick = function () {
	contactsPopup.classList.remove('popup-open');
}