const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = 'whsec_XjQvLgtl96GsnOVcNXMkzFCxRRj8b8KC';

exports.handler = async ({ headers, body }) => {
    const sig = headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (error) {
        return {
            statusCode: 400, 
        }
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        console.log(session);
    }
    // TODO send email

    return {
        statusCode: 200, 
        body: `WebHook error: ${error.message}`,
    }
}