import { css } from "@emotion/react"

export default {
  root: css`
    display: flex;
  `,
  heading: {
    root: css`
      width: 285px;
      min-width: 285px;
      margin-right: 20px;
    `,
    title: css`
      font-size: 24px;
      margin-bottom: 30px;
      line-height: 30px;
    `,
    subtitle: css`
      font-size: 16px;
    `,
  },
  form: css`
    width: 100%;
  `,
}
