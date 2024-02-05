import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    padding: 3.12rem;
    height: auto;
    display: flex;
    flex-direction: column;
    h1 {
        width: 100%;
        font-size: 3rem;
        color: var(--title);
        margin-top: 1.78rem;
        padding: 0.8rem;
        display: flex;
        justify-content:start;
    }
`;

export const ForMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;