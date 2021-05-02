import React from 'react';
import desktopBanner from '../assets/homepage_hero_desktop_2.jpg';
import tabletBanner from '../assets/homepage_hero_tablet.jpg';

const HeroBanner = () => {
	return (
		<div className="hero-banner">
			<div className="hero-banner__wrapper">
				<div className="hero-banner__content">
					<h1 className="hero-banner__header">R/Medicine<br /> Virtual Conference</h1>
					<p className="hero-banner__subheader">August 24th - 27th 2021</p>
					<p className="hero-banner__text">Registration and Abstract Submission Opening May 14th</p>
				</div>
			</div>
			<div className="hero-banner__img">
				<picture>
					<source srcSet={tabletBanner} media="(max-width: 767px)"></source>
					<img src={desktopBanner} alt="" />
				</picture>
			</div>
		</div>
	);
};

export default HeroBanner;