/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useCallback, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { matchPath } from "react-router"
import { useRouter } from "next/router"
import { Button } from "@shopify/polaris"
import { Billing } from "@commerce-club/types"

import { RouterActions, StoreSelector } from "store/entities"
import { RoutePath } from "types/router"

import { TABS } from "./Header.options"
import { Props } from "./Header.types"
import styles from "./Header.styles"

export const Header = ({ action }: Props) => {
  const dispatch = useDispatch()

  const { pathname } = useRouter()
  const billing = useSelector(StoreSelector.getBilling)
  const selectedIndex = useMemo(
    () => TABS.findIndex((item) => matchPath(pathname, { path: item.id, exact: true })),
    [pathname],
  )

  const handleTabChange = useCallback(
    (index: number) => () => {
      const nextTab = TABS[index]
      dispatch(RouterActions.redirect(nextTab.id))
    },
    [pathname],
  )
  const handleMailto = useCallback(() => {
    const link = document.createElement("a")
    link.target = "_blank"
    link.href = "mailto:support@commerceclub.io"
    link.click()
  }, [])

  return (
    <header>
      <div className="Polaris-Tabs__Wrapper">
        <ul role="tablist" className="Polaris-Tabs">
          {TABS.map((tab, index) => {
            if (tab.id === RoutePath.Plans && billing !== Billing.Version.v1) return
            return (
              <li key={tab.id} className="Polaris-Tabs__TabContainer">
                <button
                  id={tab.id}
                  role={tab.id}
                  type="button"
                  tabIndex={index}
                  className={`Polaris-Tabs__Tab${selectedIndex === index ? " Polaris-Tabs__Tab--selected" : ""}`}
                  css={styles.button}
                  aria-selected="true"
                  aria-controls={`${tab.id}-panel`}
                  onClick={handleTabChange(index)}
                >
                  <span className="Polaris-Tabs__Title">{tab.content}</span>
                </button>
              </li>
            )
          })}
          <li key="mailto" css={[styles.right.root, styles.right.mailto]}>
            <Button onClick={handleMailto}>Need Help?</Button>
          </li>
          {action && (
            <li key="action" css={styles.right.root}>
              {action}
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}
