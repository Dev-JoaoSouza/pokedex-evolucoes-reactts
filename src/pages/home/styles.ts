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

export const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    flex-grow: 1;
`