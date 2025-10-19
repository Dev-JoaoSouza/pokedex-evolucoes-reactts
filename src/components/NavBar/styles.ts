import styled from "styled-components";

export const Navigator = styled.nav`
    width: 100%;
    max-width: 367px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    & svg {
        font-size: 1.25rem;
        color: var(--white-color);
        cursor: pointer;
    }

    & input {
        width: 40px;
        height: 40px;
        text-align: center;
        background-color: var(--white-color);
        font-size: 1rem;
        border: 1px solid #000;
        border-radius: 5px;
    }
`