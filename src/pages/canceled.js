import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Canceled = () => {
	return (
		<div>
			<Header />
			<div className="canceled">
				<h1>YOUR ORDER HAS BEEN CANCELED</h1>
			</div>
            <Footer />
		</div>
	);
};

export default Canceled;