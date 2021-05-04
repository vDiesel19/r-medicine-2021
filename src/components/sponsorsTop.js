import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import chopLogo from '../assets/chop_web.svg';
import yaleHealthLogo from '../assets/Yale_SOPH_web.svg';
import RConsortiumLogo from '../assets/RConsortium_Horizontal_Pantone.svg';

const SponsorsTop = () => {
	return (
		<StaticQuery
		  	query={graphql`
				query MyQuery {
					markdownRemark(frontmatter: {id: {eq: "sponsors"}}) {
						frontmatter {
							text
						}
					}
				}
				
		  	`}
		  	render={data => (
				<div className="sponsors">
					<div className="sponsors__logos-container">
						<div className="sponsors__logo">
							<a href="https://www.chop.edu/" target="_blank" rel="noreferrer">
								<img src={chopLogo} alt="Children's Hospital of Philadelphia" />
							</a>
						</div>
						<div className="sponsors__logo">
							<a href="https://publichealth.yale.edu/" target="_blank" rel="noreferrer">
								<img src={yaleHealthLogo} alt="Yale School of Public Health" />
							</a>
						</div>
						<div className="sponsors__logo">
							<a href="https://www.r-consortium.org/" target="_blank" rel="noreferrer">
								<img src={RConsortiumLogo} alt="R Consortium" />
							</a>
						</div>
					</div>
					<div className="sponsors__content">
						<p>{data.markdownRemark.frontmatter.text}</p>
					</div>
				</div>
		  	)}
		/>
	);
};

export default SponsorsTop;