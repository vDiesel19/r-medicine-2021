const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const inventory = require('./data/products.json');

exports.handler = async ({ body }) => {
	const { sku, quantity } = JSON.parse(body);
	const product = inventory.find((product) => product.sku === sku);
	const validatedQty = quantity > 0 && quantity <= 10 ? quantity : 1;

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		billing_address_collection: 'auto',
		line_items: [
			{
				name: product.name,
				description: product.description,
				amount: product.amount,
				currency: product.currency,
				quantity: validatedQty,
			}
		],
		success_url: 'http://localhost:8888/registration',
		cancel_url: 'http://localhost:8888/registration',
	});

	return {
		statusCode: 200,
		body: JSON.stringify({ sessionId: session.id }),
	}
}