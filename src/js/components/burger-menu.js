import { exist } from '../utils';

const burgerMenu = () => {
	const burgerBtn = document.querySelector('.js-menu__btn');
	const navMenu = document.querySelector('.js-nav__wrapper');

	const handleToggle = () => {
		navMenu.classList.toggle('hide-nav');

		if (navMenu.classList.contains('hide-nav')) {
			burgerBtn.textContent = 'Menu';
		} else {
			burgerBtn.textContent = 'Close';
		}
	};

	const addEventListener = () => {
		burgerBtn.addEventListener('click', handleToggle);
	};

	if (!exist(burgerBtn)) return;

	addEventListener();
};

export default burgerMenu;
