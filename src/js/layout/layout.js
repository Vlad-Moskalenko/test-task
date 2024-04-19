// ------------------- imports
import { onWindowResize } from 'utils';
// ------------------- imports###

// ------------------  import components
import { calcViewportHeight } from '../utils';
import burgerMenu from '../components/burger-menu';
// ------------------  import components###

const layout = () => {
	onWindowResize(() => {
		calcViewportHeight();
	});
	calcViewportHeight();
	burgerMenu();
};

export default layout;
