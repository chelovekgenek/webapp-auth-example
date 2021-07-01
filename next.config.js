require("dotenv").config()
const webpack = require("webpack")

module.exports = {
  webpack: (config) => {
    const env = {
      HOTJAR_ID: JSON.stringify(process.env.HOTJAR_ID),
      MIXPANEL_TOKEN: JSON.stringify(process.env.MIXPANEL_TOKEN),
      SENTRY_DSN: JSON.stringify(process.env.SENTRY_DSN),
      SHOPIFY_API_KEY: JSON.stringify(process.env.SHOPIFY_API_KEY),
      SHOPIFY_STOREFRONT_SCRIPT: JSON.stringify(process.env.SHOPIFY_STOREFRONT_SCRIPT),
      SHOPIFY_EVENTS_ARN: JSON.stringify(process.env.SHOPIFY_EVENTS_ARN),
      HOST: JSON.stringify(String(process.env.HOST).replace(/^https:\/\//, '')),
      API_HOST: JSON.stringify(process.env.API_HOST),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }
    config.plugins.push(new webpack.DefinePlugin(env))
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    })
    return config
  },
}
