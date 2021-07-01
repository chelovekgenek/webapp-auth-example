import { css } from "@emotion/react"

export default {
  root: css`
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  `,
  note: css`
    margin-left: 24px;
  `,
}
