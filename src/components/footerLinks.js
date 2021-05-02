import React from 'react';

const FooterLinks = () => {
	return (
		<div className="footer-links">
			<div className="footer-links__category">
				<p className="footer-links__category--header">Past Events</p>
				<ul className="footer-links__list">
					<li>
						<a href="https://events.linuxfoundation.org/r-medicine/" targer="_blank" rel="noreferrer">R/Medicine 2020</a>
					</li>
					<li>
						<a href="https://r-medicine-2019.netlify.app/" targer="_blank" rel="noreferrer">R/Medicine 2019</a>
					</li>
					<li>
						<a href="https://r-medicine-2018.netlify.app/" targer="_blank" rel="noreferrer">R/Medicine 2018</a>
					</li>
				</ul>
			</div>
			<div className="footer-links__category">
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