import { css } from "@emotion/react"

export default {
  toppanel: {
    root: css`
      display: flex;
      justify-content: space-between;
    `,
    label: {
      root: css`
        display: flex;
        align-items: center;
      `,
      text: css`
        vertical-align: center;
      `,
    },
  },
  table: css`
    .Polaris-DataTable__Cell--header {
      font-weight: 600;
      text-align: start;
    }
    .Polaris-DataTable__TableRow {
      cursor: pointer;
    }
  `,
  tablerow: {
    subname: css`
      &.Polaris-TextContainer > *:not(:first-child) {
        margin: 0;
      }
    `,
  },
  status: css`
    padding: 2px 8px;
  `,
  card: css`
    width: 225px;
  `,
}
