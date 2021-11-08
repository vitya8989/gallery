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