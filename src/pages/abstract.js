import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AbstractForm from '../components/abstractForm';

const Abstract = () => {
	return (
		<div>
			<Header />
			<div className="abstract">
				<h1>Submit An Abstract</h1>
				<div className="abstract__top">
					<p className="abstract__top-subheader">Welcome to the R/Medicine 2021 Abstract submissions form! We welcome proposals for the following types of sessions:</p>
					<ol>
						<li>Lightning Talk (10 minutes)</li>
						<li>Regular Talk (20 minutes)</li>
						<li>Tutorial/Workshop (30 minutes to 3.5 hours)</li>
					</ol>
					<p className="abstract__top-subheader">We are particularly interested in submissions that discuss the following topics:</p>
					<ul>
						<li>Clinical trials</li>
						<li>Analytic bias and data ethics</li>
						<li>New analysis approaches and packages</li>
						<li>Data visualization</li>
						<li>Reproducibility</li>
						<li>Data management and analysis workflows</li>
						<li>Applied uses of R in clinical practice</li>
					</ul>
					<p><strong>Please note that this form does not allow saving information and coming back later. Be prepared to fill it out completely and make sure to hit the "Submit" button when you are done!</strong></p>
				</div>
				<div className="abstract__form-wrapper">
					<AbstractForm />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Abstract;
