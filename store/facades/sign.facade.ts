import { authenticatedFetch } from "@shopify/app-bridge-utils";
import { createApp } from '@shopify/app-bridge';

import { Storage } from 'helpers/storage';

export class SignFacade {
  static async sign(): Promise<string> {
    const app = createApp({
      apiKey: SHOPIFY_API_KEY,
      host: Storage.host,
      forceRedirect: true
    });
    const fetch = authenticatedFetch(app)
    const response = await fetch("/sign")
    const data = await response.text()
    return data
  }
}
