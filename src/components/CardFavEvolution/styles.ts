import styled from "styled-components";
import { ICardFavEvolutionStyled } from "./types";

export const Card = styled.div`
    min-width: 176px;
    min-height: 176px;
    max-width: 176px;
    height: 176px;
    position: relative;
    border-radius: 20px;
    background-color: var(--white-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.75),
                inset 0px 0px 8px rgba(0, 0, 0, 0.75);

    & svg {
        position: absolute;
        top: 12px;
        right: 10px;
        font-size: 1rem;
        cursor: pointer;
        color: #000;
    }
`

export const Title = styled.h3`
    font-size: 1rem;
    color: #000;
    text-transform: capitalize;
`

export const Pokemon = styled.div<ICardFavEvolutionStyled>`
    width: 104px;
    height: 104px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: var(--${({pokeType}) => pokeType}-color);

    & img {
        width: 120%;
        height: 120%;
    }
`

export const Types = styled.ol`
    display: flex;
    gap: 10px;
`

export const Type = styled.li<ICardFavEvolutionStyled>`
    color: var(--white-color);
    padding: 5px 8px;
    border-radius: 20px;
    font-size: 0.75rem;
    text-transform: capitalize;
    background-color: var(--${({pokeType}) => pokeType}-color);
`