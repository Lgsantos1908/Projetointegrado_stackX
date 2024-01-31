import styled from "styled-components"

export const Container = styled.div` 
    width: 100%;
    height: auto;
    background: var(--bg_footer);

    p{  
        font-size: 1rem;
        display: flex;
        align-items: start;
        justify-content: start;
        padding: 0.1rem;

        span{
            color: #303030;
            font-weight: bold;
            padding: 0 0.4rem;

            a{  
                color: #303030;
                font-weight: bold;
                text-decoration: none;
            }

        }
    }
    
`;
export const Content = styled.div`
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    
`;

export const Dados = styled.div`

    h2 {
        font-size: 1.15rem;
        margin-top: 0.5rem;
    }

    p{
        font-size: 0.8rem;
        margin-left: 0.75rem;
    }

`;

export const DadosSocial = styled.div`
    display: flex;
    flex-direction: column;
    
    h2 {
        font-size: 1.15rem;
        margin: 0.5rem;
    }
    

    div{
        font-size: 0.8rem;
        display: flex;
        margin: 0.5rem;
        align-items: center;

    }

`;
