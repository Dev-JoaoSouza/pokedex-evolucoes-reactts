import styled from "styled-components";
import { ICardFavPokemonStyled } from "./types";

export const PokeCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & svg {
        position: absolute;
        top: 3px;
        right: 1px;
        font-size: 1.125rem;
        cursor: pointer;
    }
`

export const Image = styled.div<ICardFavPokemonStyled>`
    min-width: 145px;
    min-height: 145px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: var(--${({pokeType}) => pokeType}-color);

    & img {
        width: 100%;
        height: 100%;
    }
`

export const Name = styled.h3`
    font-size: 1rem;
    color: #000000;
    text-transform: capitalize;
`