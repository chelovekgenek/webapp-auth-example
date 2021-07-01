import { SignFacade } from "store/facades"

interface Values {
  host: string
  shop: string
  accessToken: string
}

enum Keys {
  HOST = "host",
  SHOP = "shop",
  ACCESS_TOKEN = "accessToken",
}

export class Storage {
  static host: string
  static shop: string
  static accessToken: string


  static async init(values: Partial<Pick<Values, "host" | "shop">>): Promise<void> {
    let host = values.host
    if (!host && Storage.hasLS)
      host = String(localStorage.getItem(Keys.HOST))

    let shop = values.shop
    if (!shop && Storage.hasLS)
      shop = String(localStorage.getItem(Keys.SHOP))

    Storage.set({ host, shop })

    const accessToken = await SignFacade.sign()
    Storage.set({ accessToken })
  }

  static set(values: Partial<Values> = {}): void {
    if (values?.host) {
      Storage.host = values.host
      if (Storage.hasLS) localStorage.setItem(Keys.HOST, values.host)
    }
    if (values?.shop) {
      Storage.shop = values.shop
      if (Storage.hasLS) localStorage.setItem(Keys.SHOP, values.shop)
    }
    if (values?.accessToken) {
      Storage.accessToken = values.accessToken
      if (Storage.hasLS) localStorage.setItem(Keys.ACCESS_TOKEN, values.accessToken)
    }
  }

  static get isDefinedConfig(): boolean {
    return !!(Storage.host && Storage.shop)
  }

  static get hasLS(): boolean {
    return typeof localStorage !== "undefined"
  }
}
