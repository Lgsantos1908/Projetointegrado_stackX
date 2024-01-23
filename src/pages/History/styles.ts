import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: auto;
    background: #324B4E;
`;

export const Content = styled.div`
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: center;
        div{
            width: 50%;
            display: flex;
            flex-direction: column;
            padding: 10px;
        }

        h2{
            color: #617C7F;
            font-size: 48px;
            margin-top: 80px;
        }

        p{
            color: #E6FFF6;
            font-size: 19px;
            margin-top: 20px;
        }

        img{
            height: 80vh;
            margin-top: 80px;
            border-radius: 20px;
        }
`;