import { css } from "@emotion/react"

export default {
  root: css`
    margin-top: 1px;
    padding: 16px;
    border-top: 3px solid #50b83c;
    display: flex;
    justify-content: flex-start;
    background-color: #e3f1df;
  `,
  statusicon: css`
    fill: gray;
    width: 40px;
    height: 40px;
    border: 6px solid #bbe5b3;
    border-radius: 100%;
    background-color: #ffffff;
  `,
  closeicon: css`
    margin-left: auto;
    cursor: pointer;
    width: 20px;
    height: 20px;
  `,
  content: {
    root: css`
      margin: 0 20px;
    `,
    title: css`
      font-family: SF Pro Text;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    `,
    subtitle: css`
      font-family: SF Pro Text;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    `,
  },
}
