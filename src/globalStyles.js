import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
    }

    body {
        background-color: var(--third-grey);
    }

    :root {
        --first-color: #a277ff;
        --light-color: #F9F9F9;
        --first-grey: #828282;
        --second-grey: #333333;
        --third-grey: #171717;
        --fourth-grey: #212121;
    }
`;

export default GlobalStyle;
