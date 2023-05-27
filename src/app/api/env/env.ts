import { cleanEnv, str } from 'envalid';

const env = cleanEnv(process.env, {
  API_KEY: str(),
  BASE_URL: str(),
  STRIPE_SK: str(),
  NEXT_PUBLIC_STRIPE_PK: str(),
});

export default env;
