declare var HOTJAR_ID: string
declare var MIXPANEL_TOKEN: string
declare var SENTRY_DSN: string
declare var SHOPIFY_API_KEY: string
declare var SHOPIFY_STOREFRONT_SCRIPT: string
declare var SHOPIFY_EVENTS_ARN: string
declare var API_HOST: string
declare var HOST: string
declare var NODE_ENV: "production" | "development"

declare type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T[P] extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : DeepPartial<T[P]> | T[P]
}

declare module "*.svg" {
  const content: any
  export default content
}
