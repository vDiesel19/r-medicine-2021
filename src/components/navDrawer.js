import React from 'react';
import { Link } from 'gatsby';
import Hamburger from './hamburger';

const NavDrawer = (props) => {

	const closeDrawer = () => {
		document.querySelector('.drawer').classList.remove('is-active');
		document.querySelector('.hamburger').classList.remove('is-active');
	}

	return (
		<div className="drawer">
			<Hamburger />
			<div className="drawer__content">
				<ul className="drawer__link-list">
					<li>
						<a href="https://www.cvent.com/d/gjq6c5/4W?ct=50221cf5-5496-4c34-9ec0-3b52b1bf1204" target="_blank" rel="noreferrer">Register</a>
					</li>
					<li>
						<Link className="drawer__link-level-1" to="/about/">About</Link>
					</li>
					<li>
						<Link className="drawer__link-level-1" to="/code-of-conduct/">Code of Conduct</Link>
					</li>
					<li className="drawer__dropdown--wrapper">
						<Link className="drawer__link-level-1" to="/">Past Events</Link>
						<div className="drawer__dropdown">
							<a href="https://events.linuxfoundation.org/r-medicine/" target="_blank" rel="noreferrer">R/Medicine 2020</a>
							<a href="https://r-medicine-2019.netlify.app/" target="_blank" rel="noreferrer">R/Medicine 2019</a>
							<a href="https://r-medicine-2018.netlify.app/" target="_blank" rel="noreferrer">R/Medicine 2018</a>
						</div>
					</li>
					<li>
						<a className="drawer__link-level-1" href="mailto:r-medicine-conf@r-consortium.org">Contact Us</a>
					</li>
				</ul>
			</div>
			<div className="drawer__overlay" onClick={(e) => closeDrawer(e)} role="button" aria-label="overlay" tabIndex="0"></div>
		</div>
	);
};

export default NavDrawer;