import styled from "styled-components";
import { ICardPokemonStyled } from "./types";

export const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    position: relative;
    margin: 0 auto;

    & > svg {
        position: absolute;
        top: 2;
        right: 0;
        font-size: 1.3rem;
        cursor: pointer;
    }
`

export const Number = styled.span`
    font-size: 0.875rem;
`

export const Image = styled.div<ICardPokemonStyled>`
    width: 172px;
    height: 172px;
    border-radius: 50%;
    background-color: var(--${({pokeType}) => pokeType}-color);

    & img {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
`

export const Name = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    text-transform: capitalize;
`

export const Trigger = styled.h4`
    border-top: 1px solid #878787;
    width: 100%;
    text-align: center;
    text-transform: capitalize;
    font-size: 1rem;
`

export const Detail = styled.p`
    text-transform: capitalize;
    font-size: 1rem;
`