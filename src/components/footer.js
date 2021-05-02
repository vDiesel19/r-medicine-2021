import React from 'react';
import Newsletter from './newsletter';
import FooterLinks from './footerLinks';
import SocialMedia from './socialMedia';

const Footer = (props) => {
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<Newsletter />
				<div className="footer__content">
					<FooterLinks />
					<SocialMedia />
				</div>
			</div>
			<div className="footer__bottom">
				<p className="footer__copyright">Copyright &copy;2021 The Linux Foundation®. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our Trademark Usage page. Linux is a registered trademark of Linus Torvalds.</p>
			</div>
		</footer>
	);
};

export default Footer;