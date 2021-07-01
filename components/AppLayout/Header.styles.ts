import { css } from "@emotion/react"

export default {
  button: css`
    &:focus {
      outline: none;
      box-shadow: none;
    }
  `,
  right: {
    root: css`
      display: flex;
      align-items: center;
      margin-right: 16px;
    `,
    mailto: css`
      margin-left: auto;
    `,
  },
}
