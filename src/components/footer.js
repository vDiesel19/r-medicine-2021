import React from 'react';
import HubspotForm from './hubspotForm';
import FooterLinks from './footerLinks';
import SocialMedia from './socialMedia';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<HubspotForm />
				<div className="footer__content">
					<FooterLinks />
					<SocialMedia />
				</div>
			</div>
			<div className="footer__bottom">
				<p className="footer__copyright">&copy;2021 <a href="https://www.r-consortium.org/" target="_blank" rel="noreferrer">R Consortium</a>. A Linux Foundation Project. R Consortium TM is a trademark of R Consortium. All Rights Reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our <a href="https://www.linuxfoundation.org/trademark-usage" target="_blank" rel="noreferrer">Trademark Usage</a> page. Linux is a registered trademark of Linus Torvalds. <a href="https://www.r-consortium.org/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> | <a href="https://terms-of-use.r-consortium.org" target="_blank" rel="noreferrer">Terms of Use</a></p>
			</div>
		</footer>
	);
};

export default Footer;