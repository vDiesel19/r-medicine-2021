import React, { useState } from 'react';
import rMedicineLogo from '../assets/r_medicine_logo.png';
import { loadStripe } from "@stripe/stripe-js";

const inventory = [
	{
		"sku": "RMT1",
		"name": "R Medicine 2021 Tier 1",
		"description": "R Medicine 2021 Tier 1 Registration for Institutions",
		"image": "../assets/r_medicine_logo.png",
		"amount": 10000,
		"currency": "USD"
	},
	{
		"sku": "RMT2",
		"name": "R Medicine 2021 Tier 2",
		"description": "R Medicine 2021 Tier 2 Registration for Professionals",
		"image": "../assets/r_medicine_logo.png",
		"amount": 5000,
		"currency": "USD"
	},
	{
		"sku": "RMT3",
		"name": "R Medicine 2021 Tier 3",
		"description": "R Medicine 2021 Tier 3 Registration for Students",
		"image": "../assets/r_medicine_logo.png",
		"amount": 1000,
		"currency": "USD"
	}
];

const STRIPE_PUB_KEY = 'pk_test_51IpG4cJ07D88KyOsxixF1RuvQEn7Rpm3e5rqc1ybzfdHjcY0IIrwA4fY0w2oEGlx0CYziphtwqJfPA2DffAO6IpY00vVZnFQ6q';
const stripePromise = loadStripe(STRIPE_PUB_KEY);

const Products = () => {
	const format = (amount, currency) => new Intl.NumberFormat('en-US', { 
		style: 'currency', 
		currency: currency,
	}).format((amount / 100).toFixed(2));

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = new FormData(e.target);
		const data = {
			sku: form.get('sku'), 
			quantity: Number(form.get('quantity')),
		};


		// TODO send to serverless function
		const response = await fetch('/.netlify/functions/create-checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			}, 
			body: JSON.stringify(data),
		}).then(res => res.json());

		console.log(`handleSubmit: ${JSON.stringify(response)}`);

		// TODO get the session ID and redirect to checkout
		const stripe = await stripePromise;
		const { error } = await stripe.redirectToCheckout({
			sessionId: response.sessionId,
		});

		if (error) {
			console.error(error);
		}
	};

	return (
		<section className="products">
			{inventory.map(product => {
				return (
					<div className="product" key={product.sku}>
						<img src={rMedicineLogo} alt={product.name} />
						<p className="product__name">{product.name}</p>
						<p className="product__description">{product.description}</p>
						<p className="product__price">{format(product.amount, product.currency)}</p>
						<form className="product__form" onSubmit={(e) => handleSubmit(e)}>
							<label htmlFor="quantity">Quantity</label>
							<input type="number" id="quantity" name="quantity" min="1" max="10" />
							<input type="hidden" name="sku" value={product.sku} />
							<button type="submit" className="product__add-to-cart">Buy Now</button>
						</form>
					</div>
				);
			})}
		</section>
	);
};

export default Products;