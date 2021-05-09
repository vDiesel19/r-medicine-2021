import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Products from '../components/products'

const Registration = () => {
	return (
		<div>
			<Header />
			<div className="registration">
				<h1>Registration Gatsby</h1>
				<Products />
			</div>
			<Footer />
		</div>
	);
};

export default Registration;