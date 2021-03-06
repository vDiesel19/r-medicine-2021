import React from 'react';
import { Link } from 'gatsby';

const DesktopNav = () => {
	return (
		<nav className="desktop-nav">
			<ul className="desktop-nav__link-list">
				<li>
					<Link className="desktop-nav__link-level-1" to="/virtual-speaker-guide">Speakers</Link>
				</li>
				<li className="desktop-nav__dropdown--wrapper">
					<Link className="desktop-nav__link-level-1" to="/">Attend</Link>
					<div className="desktop-nav__dropdown">
						<Link to="/about/">About</Link>
						<Link to="/schedule/">Schedule</Link>
						<Link to="/code-of-conduct/">Code of Conduct</Link>
					</div>
				</li>
				<li className="desktop-nav__dropdown--wrapper">
					<Link className="desktop-nav__link-level-1" to="/">Past Events</Link>
					<div className="desktop-nav__dropdown">
						<a href="https://events.linuxfoundation.org/r-medicine/" target="_blank" rel="noreferrer">R/Medicine 2020</a>
						<a href="https://r-medicine-2019.netlify.app/" target="_blank" rel="noreferrer">R/Medicine 2019</a>
						<a href="https://r-medicine-2018.netlify.app/" target="_blank" rel="noreferrer">R/Medicine 2018</a>
					</div>
				</li>
				<li>
					<a className="desktop-nav__link-level-1" href="mailto:r-medicine-conf@r-consortium.org">Contact Us</a>
				</li>
			</ul>
		</nav>
	);
};

export default DesktopNav;