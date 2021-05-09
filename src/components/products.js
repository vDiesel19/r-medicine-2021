import React, { useState } from 'react';
import rMedicineLogo from '../assets/r_medicine_logo.png';

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

const Product = (product) => {
	const [quantity, setQuantity] = useState();
};

const Products = () => {
	const format = (amount, currency) => new Intl.NumberFormat('en-US', { 
		style: 'currency', 
		currency: currency,
	}).format((amount / 100).toFixed(2));

	const handleSubmit = async (e) => {
		e.preventDefault();

		// TODO send to serverless function
		const response = await fetch('/.netlify/functions/create-checkout.js', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			}, 
			body: JSON.stringify({
				sku: product.sku,

			})
		});
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