import Stripe from 'stripe';
import env from '../env/env';
import { NextResponse } from 'next/server';

const stripe = new Stripe(env.STRIPE_SK, { apiVersion: '2022-11-15' });

export default async function POST(request: Request) {
  if (request.method === 'POST') {
    const session = await stripe.checkout.sessions.create({
      success_url: `${env.BASE_URL}/success`,
      cancel_url: `${env.BASE_URL}/cancel`,
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price: '2099',
          quantity: 1,
        },
      ],
    });
    NextResponse.redirect(session.url);
  }
}
