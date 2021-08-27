import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import desktopBanner from '../assets/homepage_hero_desktop_2.jpg';
import tabletBanner from '../assets/homepage_hero_tablet.jpg';

const HeroBanner = () => {
	return (
		<StaticQuery
		  query={graphql`
				query HeroBannerQuery {
					markdownRemark(frontmatter: {id: {eq: "hero-banner"}}) {
						frontmatter {
							heroheader_line_1
							heroheader_line_2
							herosubheader
							herotext
						}
					}
				}
		  `}
		  render={data => (
				<div className="hero-banner">
					<div className="hero-banner__wrapper">
						<div className="hero-banner__content">
							<h1 className="hero-banner__header">{data.markdownRemark.frontmatter.heroheader_line_1}<br /><span>{data.markdownRemark.frontmatter.heroheader_line_2}</span></h1>
							<p className="hero-banner__subheader">{data.markdownRemark.frontmatter.herosubheader}</p>
							<p className="hero-banner__text"><a href="https://spatial.chat/s/R-Medicine2021?room=231308" target="_blank">{data.markdownRemark.frontmatter.herotext}</a></p>
							<div className="hero-banner__buttons">
								<a className="hero-banner__cta-link" href="https://www.cvent.com/d/gjq6c5/4W?ct=50221cf5-5496-4c34-9ec0-3b52b1bf1204" target="_blank" rel="noreferrer">
									<button className="hero-banner__cta" type="text">
										Register
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="hero-banner__img">
						<picture>
							<source srcSet={tabletBanner} media="(max-width: 767px)"></source>
							<img src={desktopBanner} alt="R Medicine" />
						</picture>
					</div>
				</div>
		  	)}
		/>
	)
};

export default HeroBanner;