/** @type {import('next').NextConfig} */

import dotenv from 'dotenv';
dotenv.config({ path: `envs/.env.${process.env.APP_ENV || 'local'}` })

const nextConfig = {
  output: "export",
  reactStrictMode: false,
  trailingSlash: true,
  env: {
    HOST_URI: process.env.HOST_URI,
    STRIPE_KEY: process.env.STRIPE_KEY,
  }
};


export default nextConfig;
