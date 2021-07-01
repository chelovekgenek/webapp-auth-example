import urljoin from "url-join"

export const concatAppURL = (...args: string[]) =>
  urljoin(location.ancestorOrigins[0], "/admin/apps/", SHOPIFY_API_KEY, ...args)
