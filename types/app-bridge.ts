export enum AppBridgeEvent {
  Redirect = "APP::NAVIGATION::REDIRECT::APP",
}

export interface AppBridgeRedirectPayload {
  id: string
  path: string
}
