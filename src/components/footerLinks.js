import React from 'react';
import { Link } from 'gatsby';

const FooterLinks = () => {
	return (
		<div className="footer-links">
			<div className="footer-links__category category-contact">
				<p className="footer-links__category--header">Attend</p>
				<ul className="footer-links__list">
					<li>
						<a href="https://www.cvent.com/d/gjq6c5/4W?ct=50221cf5-5496-4c34-9ec0-3b52b1bf1204" target="_blank" rel="noreferrer">Register</a>
					</li>
					<li>
						<Link to="/virtual-speaker-guide">Speakers</Link>
					</li>
					<li>
						<Link to="/about/">About</Link>
					</li>
					<li>
						<Link to="/code-of-conduct/">Code of Conduct</Link>
					</li>
				</ul>
			</div>
			<div className="footer-links__category">
				<p className="footer-links__category--header">Past Events</p>
				<ul className="footer-links__list">
					<li>
						<a href="https://events.linuxfoundation.org/r-medicine/" target="_blank" rel="noreferrer">R/Medicine 2020</a>
					</li>
					<li>
						<a href="https://r-medicine-2019.netlify.app/" target="_blank" rel="noreferrer">R/Medicine 2019</a>
					</li>
					<li>
						<a href="https://r-medicine-2018.netlify.app/" target="_blank" rel="noreferrer">R/Medicine 2018</a>
					</li>
				</ul>
			</div>
			<div className="footer-links__category category-contact">
				<p className="footer-links__category--header">Support</p>
				<ul className="footer-links__list">
					<li>
						<a href="mailto:r-medicine-conf@r-consortium.org">Contact Us</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default FooterLinks;