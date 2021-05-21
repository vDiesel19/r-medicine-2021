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
					<p className="thank-you__text">If you are chosen to speak you will be contacted at a later date.</p>
				</div>
			</div>
      <Footer />
		</div>
	);
};

export default ThankYou;