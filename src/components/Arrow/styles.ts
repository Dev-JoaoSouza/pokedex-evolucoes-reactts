import styled from "styled-components";

export const ArrowContainer = styled.div`
    height: 82px;

    & img {
        transform: rotate(90deg);
        position: relative;
        top: 26px;
    }

    @media screen and (min-width: 900px) {
        & {
            height: auto;
        }
        & img {
            transform: rotate(0deg);
            top: 0px;
        }
    }
`