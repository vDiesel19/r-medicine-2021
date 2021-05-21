import React from 'react';
import NewsletterHubspot from './newsletterHubspot';
import FooterLinks from './footerLinks';
import SocialMedia from './socialMedia';

const Footer = (props) => {
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<NewsletterHubspot />
				<div className="footer__content">
					<FooterLinks />
					<SocialMedia />
				</div>
			</div>
			<div className="footer__bottom">
				<p className="footer__copyright">Copyright &copy;2021 The Linux Foundation®. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our <a href="https://www.linuxfoundation.org/trademark-usage" target="_blank" rel="noreferrer">Trademark Usage</a> page. Linux is a registered trademark of Linus Torvalds. <a href="https://www.linuxfoundation.org/terms/" target="_blank" rel="noreferrer">Terms of Use</a> | <a href="https://www.linuxfoundation.org/privacy/" target="_blank" rel="noreferrer">Privacy Policy</a></p>
			</div>
		</footer>
	);
};

export default Footer;