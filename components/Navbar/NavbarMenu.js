import PropTypes from 'prop-types';
import { Menu } from 'antd';

const RightMenu = ({ mode }) => (
	<Menu mode={mode}>
		<Menu.Item key="home">
			<a href="#">Home</a>
		</Menu.Item>
		<Menu.Item key="signin">
			<a href="#">Sign In</a>
		</Menu.Item>
		<Menu.Item key="signup">
			<a href="#">Sign Up</a>
		</Menu.Item>
	</Menu>
);

RightMenu.propTypes = {
	mode: PropTypes.string.isRequired,
};

export default RightMenu;