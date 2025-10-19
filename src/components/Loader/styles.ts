import styled, { css } from "styled-components";
import { ILoaderStyledLoading, ILoaderStyledLoaderItem } from "./types";

export const Loading = styled.div<ILoaderStyledLoading>`
    position: relative;
    width: 120px;
    height: 120px;
    align-self: center;
    --color-loader: #1700ff;
    ${({hide}) => hide === "true" && css`
        display: none;
    `}
`

export const LoaderItem = styled.span<ILoaderStyledLoaderItem>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(18deg * ${({item}) => item}));

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: var(--color-loader);
        box-shadow: 0 0 10px var(--color-loader),
                    0 0 20px var(--color-loader),
                    0 0 40px var(--color-loader),
                    0 0 60px var(--color-loader),
                    0 0 80px var(--color-loader),
                    0 0 100px var(--color-loader);
        animation: animate 2s linear infinite;
        animation-delay: calc(0.1s * ${({item}) => item});
    }

    @keyframes animate {
    0% {
        transform: scale(1);
    }
    80%, 100% {
        transform: scale(0);
    }
`