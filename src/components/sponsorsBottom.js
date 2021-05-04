import React from 'react';
import chopLogo from '../assets/chop_web.svg';
import procogiaLogo from '../assets/procogia.svg';
import RConsortiumLogo from '../assets/RConsortium_Horizontal_Pantone.svg';
import RStudioLogo from '../assets/RStudio-Logo-flat.svg';
import yaleHealthLogo from '../assets/Yale_SOPH_web.svg';

const SponsorsBottom = () => {
	return (
		<div className="sponsors sponsors__bottom">
			<div className="sponsors__logos-container">
				<div className="sponsors__logo">
					<a href="https://www.chop.edu/" target="_blank" rel="noreferrer">
						<img src={chopLogo} alt="Children's Hospital of Philadelphia" />
					</a>
				</div>
				<div className="sponsors__logo">
					<a href="https://www.procogia.com/" target="_blank" rel="noreferrer">
						<img src={procogiaLogo} alt="Procogia" />
					</a>
				</div>
				<div className="sponsors__logo">
					<a href="https://www.r-consortium.org/" target="_blank" rel="noreferrer">
						<img src={RConsortiumLogo} alt="R Consortium" />
					</a>
				</div>
			</div>
			<div className="sponsors__logos-container sponsors__logos-container-last">
				<div className="sponsors__logo">
					<a href="https://www.rstudio.com/" target="_blank" rel="noreferrer">
						<img src={RStudioLogo} alt="R Studio" />
					</a>
				</div>
				<div className="sponsors__logo">
					<a href="https://publichealth.yale.edu/" target="_blank" rel="noreferrer">
						<img src={yaleHealthLogo} alt="Yale School of Public Health" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default SponsorsBottom;