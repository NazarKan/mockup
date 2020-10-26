const nav = document.querySelector('.header__nav')
console.log(nav);

const topOfNav = nav.offsetTop;
console.log(topOfNav);

function fixNav() {
	if (window.scrollY >= topOfNav) {
		document.body.classList.add('fixed-nav');
		document.body.style.paddingTop = nav.offsetHeight + 'px'
	} else {
		document.body.classList.remove('fixed-nav');
		document.body.style.paddingTop = 0
	}

}

window.addEventListener('scroll', fixNav);