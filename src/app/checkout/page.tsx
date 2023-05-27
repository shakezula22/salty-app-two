import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SK!, { apiVersion: '2022-11-15' });

async function createSetupIntent() {
  const setupIntent = await stripe.setupIntents.create({
    payment_method_types: ['card'],
  });
}

export default async function CheckoutPage() {
  return <h1>Pay for Your Shit</h1>;
}
