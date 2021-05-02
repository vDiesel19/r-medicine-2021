import React from 'react';
import NavDrawer from './navDrawer';
import Logo from './logo';
import DesktopNav from './desktopNav';

const Header = (props) => {
	return (
		<header className="header">
			<div className="header__wrapper">
				<div className="header__content">
					<NavDrawer />
					<Logo />
					<DesktopNav />
				</div>
			</div>
			<div className="header__border"></div>
		</header>
	);
};

export default Header;