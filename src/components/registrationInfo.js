import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import parse from 'html-react-parser';

const RegistrationInfo = () => {
	return (
		<StaticQuery
		  query={graphql`
				query RegistrationQuery {
					markdownRemark(frontmatter: {id: {eq: "registration-info"}}) {
						frontmatter {
							text_section_1
							text_section_2
							text_section_3
							text_section_4
							fees {
								image {
									childImageSharp {
										fluid(maxWidth: 120) {
											src
										}
									}
								}
								tier
								price
								description
							}
						}
					}
				}
		  `}
		  render={data => (
				<div className="registration">
					<div className="registration__container">
						<p className="registration__subheader">{data.markdownRemark.frontmatter.text_section_1}</p>
						<p className="registration__subheader">{parse(data.markdownRemark.frontmatter.text_section_2)}</p>
						<div className="registration__content">
						{data.markdownRemark.frontmatter.fees.map(fee => {
							return (
								<div className="registration__tier" key={fee.tier}>
									<div className="registration__img-container">
										<img src={fee.image.childImageSharp.fluid.src} alt={fee.tier} />
									</div>
									<p className="registration__tier-name">{fee.tier}</p>
									<p className="registration__tier-price">{fee.price}</p>
									<p className="registration__tier-description">{parse(fee.description)}</p>
								</div>
							);
						})}
						</div>
						<p className="registration__subheader subheader__bottom">{data.markdownRemark.frontmatter.text_section_3}</p>
						<a className="registration__cta-link" href="https://www.cvent.com/d/gjq6c5/4W?ct=50221cf5-5496-4c34-9ec0-3b52b1bf1204" target="_blank" rel="noreferrer">
							<button className="registration__cta" type="text">
								Register
							</button>
						</a>
						<p className="registration__subheader subheader__bottom subheader__last">{data.markdownRemark.frontmatter.text_section_4}</p>
						<a className="registration__cta-link" href="https://www.r-consortium.org/r-medicine-diversity-equity-inclusion-scholarship" target="_blank" rel="noreferrer">
							<button className="registration__cta" type="text">
								Apply
							</button>
						</a>
					</div>
				</div>
		  )}
		/>
	)
};

export default RegistrationInfo;