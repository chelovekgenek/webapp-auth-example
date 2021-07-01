import axios, { AxiosError, AxiosInstance } from "axios"
import { Storage } from "helpers/storage"

export class Facade {
  private static instance: AxiosInstance
  // private static signFacade = new SignFacade(API_HOST)

  protected static get client() {
    if (!this.instance) {
      this.instance = axios.create({ baseURL: API_HOST })

      this.instance.interceptors.request.use((reqConfig) => {
        reqConfig.headers["X-Access-Token"] = Storage.accessToken
        return reqConfig
      })
      this.instance.interceptors.response.use(undefined, async (error) => {
        const response = error.response

        if (response?.status === 401 && error.config && !error.config.__isRetryRequest) {
          try {
            // await Facade.refreshAccessToken()
            console.log("token mock refreshing")
          } catch (authError) {
            return Promise.reject(error)
          }
          error.config.__isRetryRequest = true
          return this.instance(error.config)
        }

        return Promise.reject(error)
      })
    }
    return this.instance
  }

  static logError(error: AxiosError) {
    if (error.isAxiosError) {
      // console.error(
      //   `Request Error! Method: ${error.config.method?.toUpperCase()}; Path: ${error.config.url}; Status: ${error.response?.status || "none"
      //   }.`,
      // )
    } else {
      console.error(error)
    }
  }

  // static async refreshAccessToken() {
  //   const payload = SignFacade.decryptPayload(Cookies.get(CookieKey.PAYLOAD))
  //   const token = await Facade.signFacade.sign(payload)
  //   Token.set(token)
  // }
}
