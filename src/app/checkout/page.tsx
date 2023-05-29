import Button from '@/components/UI/Button';
import { loadStripe } from '@stripe/stripe-js';
import env from '../api/env/env';

// const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PK);

export default function CheckoutPreviewPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <form action="/api/create-checkout-session" method="POST">
        <Button type="submit">Pay</Button>
      </form>
    </div>
  );
}
