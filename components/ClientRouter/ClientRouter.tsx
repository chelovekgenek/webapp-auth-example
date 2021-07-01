import { useRouter } from "next/router"
import { ClientRouter as AppBridgeClientRouter } from "@shopify/app-bridge-react"

export const ClientRouter = () => {
  const router = useRouter()
  return <AppBridgeClientRouter history={router} />
}
