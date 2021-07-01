import { css } from "@emotion/react"

export default {
  root: css`
    width: 100%;
    height: 60px;
    background: #f0e7fc;
    border: 1px solid #dfe3e8;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 50px;

    .Polaris-ProgressBar {
      margin: 0 20px;
    }

    .Polaris-ProgressBar__Indicator {
      background: linear-gradient(270deg, #a752f2 0%, #a752f2 100%);
    }

    .Polaris-Button {
      background: linear-gradient(270deg, #c787ff 0%, #a752f2 100%);
      border-radius: 3px;
      padding: 8px 31px;
    }
    .Polaris-Button__Content {
      display: inline-table;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
      white-space: nowrap;
    }
  `,
  views: css`
    padding: 10px 12px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
    border: 1px solid #c4cdd5;
    box-shadow: 0px 1px 0px rgba(22, 29, 37, 0.05);
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #637381;
  `,
}
