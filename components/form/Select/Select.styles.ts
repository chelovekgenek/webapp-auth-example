import { css } from "@emotion/react"

export default {
  root: css`
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  `,
  label: css`
    margin-bottom: 8px;
  `,
  note: css`
    margin-top: 8px;
  `,
}
