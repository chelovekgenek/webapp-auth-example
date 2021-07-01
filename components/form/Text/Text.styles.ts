import { css } from "@emotion/react"

export default {
  root: css`
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  `,
  label: css`
    margin-bottom: 8px;
    display: flex;
    & > span {
      outline: none;
      box-shadow: none;
    }
  `,
}
