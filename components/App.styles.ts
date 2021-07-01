import { css } from "@emotion/react"

export default {
  global: css`
    hr {
      border: 1px solid #eceff1;
    }

    @font-face {
      font-family: "SF Pro Text";
      src: url("/fonts/SFProText/SFProText-Regular.ttf");
      font-display: swap;
      font-style: normal;
      font-weight: normal;
    }

    @font-face {
      font-family: "Roboto";
      src: url("/fonts/Roboto/Roboto-Regular.ttf");
      font-display: swap;
      font-style: normal;
      font-weight: normal;
    }
  `,
}
