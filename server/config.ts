import Shopify, { ApiVersion } from '@shopify/shopify-api';
import dotenv from "dotenv"

dotenv.config()

const config = {
  HOST: new URL(String(process.env.HOST)).host,
  API_HOST: String(process.env.API_HOST),
  PORT: parseInt(process.env.PORT || "3000", 10),
  SHOPIFY_API_KEY: String(process.env.SHOPIFY_API_KEY),
  SHOPIFY_API_SECRET_KEY: String(process.env.SHOPIFY_API_SECRET_KEY),
  SCOPES: [
    "read_products",
    "read_customers",
    "write_discounts",
    "write_orders",
    "write_checkouts",
    "write_order_edits",
    "write_script_tags",
  ],
}



Shopify.Context.initialize({
  API_KEY: config.SHOPIFY_API_KEY,
  API_SECRET_KEY: config.SHOPIFY_API_SECRET_KEY,
  SCOPES: config.SCOPES,
  HOST_NAME: config.HOST,
  API_VERSION: ApiVersion.October20,
  IS_EMBEDDED_APP: true,
  // More information at https://github.com/Shopify/shopify-node-api/blob/main/docs/issues.md#notes-on-session-handling
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

export default config
