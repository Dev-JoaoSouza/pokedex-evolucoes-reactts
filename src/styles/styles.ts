import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-weight: normal;
        outline: none;
        border: none;
    }

    :root {
        --normal-color: #a6a877;
        --grass-color: #77c850;
        --fire-color: #ee7f30;
        --water-color: #678fee;
        --electric-color: #f7cf2e;
        --ice-color: #98d5d7;
        --ground-color: #dfbf69;
        --flying-color: #a98ff0;
        --poison-color: #a040a0;
        --fighting-color: #bf3029;
        --psychic-color: #f65687;
        --dark-color: #725847;
        --rock-color: #b8a137;
        --bug-color: #a8b720;
        --ghost-color: #6e5896;
        --steel-color: #b9b7cf;
        --dragon-color: #6f38f6;
        --fairy-color: #f9aec7;
        --white-color: #ffffff;
    }

    body {
        width: 100%;
        min-height: 100dvh;
        background-image: radial-gradient(circle, #ffde00 10%, #b3a125 50%, #998500 85%);
        display: flex;
        flex-direction: column;
        font-family: 'Times New Roman', Times, serif;
    }
`