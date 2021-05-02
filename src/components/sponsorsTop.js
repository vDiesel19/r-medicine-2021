import React from 'react';
import chopLogo from '../assets/chop_web.svg';
import yaleHealthLogo from '../assets/Yale_SOPH_web.svg';
import RConsortiumLogo from '../assets/RConsortium_Horizontal_Pantone.svg';

const SponsorsTop = () => {
	return (
		<div className="sponsors">
			<div className="sponsors__logos-container">
				<div className="sponsors__logo">
					<img src={chopLogo} alt="Children's Hospital of Philadelphia" />
				</div>
				<div className="sponsors__logo">
					<img src={yaleHealthLogo} alt="Yale School of Public Health" />
				</div>
				<div className="sponsors__logo">
					<img src={RConsortiumLogo} alt="R Consortium" />
				</div>
			</div>
			<div className="sponsors__content">
				<p>The R/Medicine conference and community promote the development and use of R based tools to improve clinical research and practice.</p>
			</div>
		</div>
	);
};

export default SponsorsTop;