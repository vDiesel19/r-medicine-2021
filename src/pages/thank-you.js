import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const ThankYou = () => {
	return (
		<div>
			<Header />
			<div className="thank-you">
				<div className="thank-you__content">
					<h1 className="thank-you__header">Thank you for submitting an Abstract!</h1>
					<p className="thank-you__text">The R/Medicine Program Committee will review each submission. You can expect to receive an email notifying you with the decision by Friday, July 17th.</p>
				</div>
			</div>
      <Footer />
		</div>
	);
};

export default ThankYou;