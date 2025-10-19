import styled, { css } from "styled-components";
import { IFavoritesStyledSeleted, IFavoritesStyledHide } from "./types";

export const FavoriteContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const FavoriteNames = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid var(--white-color);
    gap: 10px;
    padding-top: 5px;
`

export const Name = styled.p<IFavoritesStyledSeleted>`
    color: var(--white-color);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 5px 10px;

    ${({select}) => select === "true" && css`
        background-color: var(--white-color);
        border-radius: 10px 10px 0 0;
        color: #2f2f2f;
    `}
`

export const FavoriteCard = styled.div<IFavoritesStyledHide>`
    max-width: 100vw;
    width: 100%;
    height: 200px;

    ${({hide}) => hide === "true" && css`
        height: 0px;
    `}

    background-color: var(--white-color);
    position: absolute;
    left: 0;
    top: 182px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    overflow-x: scroll;
    scrollbar-width: thin;
    transition: height 0.4s ease-in;
    padding: 0px 10px;

    & p {
        margin: 0 auto;
    }
`