import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.section`
    width: 100%;
    max-width: 1136px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex-grow: 1;
`

export const Evolutions = styled.div`
    margin: 30px auto 0;
    width: 97%;
    max-width: 942px;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 16px;
    padding: 10px;
    border-radius: 40px;
    position: relative;
    flex-grow: 1;

    & > svg {
        position: absolute;
        top: 40px;
        left: 40px;
        font-size: 2.188rem;
        color: #000;
        cursor: pointer;
    }

    @media screen and (min-width: 900px) {
        & {
            margin: 30px auto 0;
            padding: 40px 30px;
            flex-direction: row;
            width: 100%;
        }
    }
`

export const EvolutionCard = styled.div`
    display: flex;
    gap: 15px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    overflow-x: scroll;
    scrollbar-width: none;

    @media screen and (min-width: 900px) {
        & {
            flex-direction: column;
            justify-content: center;
            gap: 15px;
            overflow-x: auto;
        }
    }
`