import styled, { css } from "styled-components";
import { ICardDetailsStyled } from "./types";

export const CardContainer = styled.section<ICardDetailsStyled>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    padding: 2% 5%;

    ${({hide}) => hide === "true" && css`
        display: none;
    `}

    & svg {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 40px;
        cursor: pointer;
        color: var(--white-color);
    }
`

export const Card = styled.div`
    width: 100%;
    max-width: 450px;
    background-color: var(--white-color);
    border-radius: 20px;
`

export const CardImage = styled.div<ICardDetailsStyled>`
    display: flex;
    flex-direction: column;
    border-radius: 20px 20px 0 0;
    padding: 1rem 1rem 0rem;
    background-color: var(--${({pokeType}) => pokeType}-color);

    & img {
        width: 180px;
        height: 180px;
        align-self: center;
        position: relative;
        top: 10px;
        z-index: 1;
    }
`

export const CardImageTitle = styled.div`
    display: flex;
    justify-content: space-between;

    & h2 {
        font-size: 1.5rem;
        text-transform: capitalize;
        font-weight: bold;
    }

    & span {
        font-size: 1rem;
    }
`

export const CardImageTypes = styled.ul`
    display: flex;
    gap: 0.625rem;
`

export const Type = styled.li<ICardDetailsStyled>`
    margin-top: 0.625rem;
    padding: 0.3rem 1rem;
    font-size: 0.875rem;
    color: var(--white-color);
    border-radius: 1.25rem;
    filter: brightness(1.15);
    text-transform: capitalize;
    background-color: var(--${({pokeType}) => pokeType}-color);
`

export const CardDescription = styled.div`
    border-radius: 20px;
    padding: 0.75rem 1.5rem 0;
    position: relative;
    top: -20px;
    background-color: var(--white-color);

    h3 {
        font-size: 1.125rem;
        font-weight: bold;
        margin-top: 15px;
    }
`

export const CardDescriptionAbout = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;

    & li {
        display: flex;
        gap: 20px;
        margin-left: 10px;
    }

    & li:first-of-type span:last-of-type {
        text-transform: capitalize;
    }

    & li span:first-of-type {
        font-size: 1rem;
        color: #000;
        width: 90px;
        text-transform: capitalize;
    }
`

export const CardDescriptionAbility = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
`

export const CardDescriptionAbilityItem =styled.li<ICardDetailsStyled>`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;

    & span:first-of-type {
        font-size: 1rem;
        color: #000;
        width: 120px;
    }

    & span:last-of-type {
        width: 200px;
        height: 10px;
        border-radius: 5px;
        background-color: #8d8c8c;
    }

    & span:last-of-type div {
        height: 10px;
        border-radius: 5px;
        width: ${({value}) => value}px;
        background-color: var(--${({pokeType}) => pokeType}-color);
    }
`