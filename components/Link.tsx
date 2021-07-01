import { useCallback, MouseEvent } from "react"
import { Redirect } from "@shopify/app-bridge/actions"
import { useAppBridge } from "@shopify/app-bridge-react"
import { Button, ButtonProps } from "@shopify/polaris"

type Props = {
  path: string
  children: React.ReactNode
}

type LinkButton = Props &
  Partial<ButtonProps> & {
    children: string
  }

export const Link = ({ path, children }: Props) => {
  const app = useAppBridge()
  const redirect = Redirect.create(app)

  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation()
      e.nativeEvent.stopImmediatePropagation()
      redirect.dispatch(Redirect.Action.APP, path)
    },
    [path],
  )

  return (
    <a href={path} onClick={handleClick}>
      {children}
    </a>
  )
}

Link.Button = ({ path, children, ...props }: LinkButton) => {
  const app = useAppBridge()
  const redirect = Redirect.create(app)

  const handleClick = useCallback(() => {
    redirect.dispatch(Redirect.Action.APP, path)
  }, [path])

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  )
}
