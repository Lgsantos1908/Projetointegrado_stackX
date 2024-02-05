import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: auto;
`;

export const Content = styled.div`
        display: flex;
        padding: 0.62rem;
        align-items: center;
        justify-content: center;
        div{
            width: 50%;
            display: flex;
            flex-direction: column;
            padding: 0.62rem;
        }

        h1{
            color: var(--title);
            font-size: 3rem;
            margin-top: 5rem;
        }

        p{
            color: #E6FFF6;
            font-size: 1.18rem;
            margin-top: 1.25rem;
        }

        img{
            height: 80vh;
            margin-top: 5rem;
            border-radius: 1.25rem;
        }
`;