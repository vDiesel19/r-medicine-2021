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
					<img src={chopLogo} alt="Children's Hospital of Philadelphia" />
				</div>
				<div className="sponsors__logo">
					<img src={procogiaLogo} alt="Procogia" />
				</div>
				<div className="sponsors__logo">
					<img src={RConsortiumLogo} alt="R Consortium" />
				</div>
			</div>
			<div className="sponsors__logos-container sponsors__logos-container-last">
				<div className="sponsors__logo">
					<img src={RStudioLogo} alt="R Studio" />
				</div>
				<div className="sponsors__logo">
					<img src={yaleHealthLogo} alt="Yale School of Public Health" />
				</div>
			</div>
		</div>
	);
};

export default SponsorsBottom;