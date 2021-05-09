const stripe = require('stripe')(process.env.STRIPE_PUBLIC_TEST_KEY);
const inventory = require('./data/products.json');

exports.handler = async ({ body }) => {
	const { sku, quantity } = JSON.parse(body);
	const product = inventory.find((product) => product.sku === sku);
	const validatedQty = quantity > 0 && quantity <= 10 ? quantity : 1;

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		line_items: [{
			name: product.name,
			description: product.description,
			images: [product.image],
			amount: product.amount,
			currency: product.currency,
			quantity: validatedQty,
		}]
	});

	return {
		statusCode: 200,
		body: JSON.stringify({ sku, quantity }),
	}
}