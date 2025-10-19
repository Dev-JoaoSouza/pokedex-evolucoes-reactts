import styled, { css } from 'styled-components';
import { IFailureScreenStyled } from './types';

export const FalureContainer = styled.section<IFailureScreenStyled>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    padding: 2% 5%;
    gap: 20px;
    ${({hide}) => hide === "true" && css`
        display: none;
    `}

    & h3 {
        font-size: 2rem;
        text-transform: capitalize;
        font-weight: bold;
        color: var(--white-color);
    }

    & button {
        padding: 15px 20px;
        background-color: #daa520;
        color: var(--white-color);
        font-size: 1rem;
        border-radius: 15px;
        cursor: pointer;
    }
`