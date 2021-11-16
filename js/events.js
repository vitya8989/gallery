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
