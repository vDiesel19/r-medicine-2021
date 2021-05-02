import React from 'react';
import Header from '../components/header';

const About = () => {
	return (
		<div>
			<Header headerText="This is my header" />
			<div className="about">
				<h1>About R Medicine 2021</h1>
				<p>Such wow. Very React.</p>
			</div>
		</div>
	);
};

export default About;