import { css } from "@emotion/react"

export default {
  root: css`
    font-family: SF Pro Text;
    line-height: 20px;
  `,

  form: css`
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  `,

  btn: css`
    width: 100%;
    display: inline-block;
    margin-bottom: 20px;
    button {
      float: right;
      margin-right: 280px;
    }
  `,
}
