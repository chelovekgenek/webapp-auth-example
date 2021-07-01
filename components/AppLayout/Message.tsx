/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useDispatch, useSelector } from "react-redux"
import { AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai"

import { AppAction, AppSelector } from "store/entities"

import styles from "./Message.styles"
import { useCallback } from "react"

export const Message = () => {
  const dispatch = useDispatch()
  const data = useSelector(AppSelector.getMessage())

  const hide = useCallback(() => dispatch(AppAction.message.hide()), [])

  if (!data) return null

  return (
    <div css={styles.root}>
      <AiOutlineCheckCircle css={styles.statusicon} />
      <div css={styles.content.root}>
        <h3 css={styles.content.title}>{data.title}</h3>
        {data.subtitle && <p css={styles.content.subtitle}>{data.subtitle}</p>}
      </div>
      <AiOutlineClose css={styles.closeicon} onClick={hide} />
    </div>
  )
}
