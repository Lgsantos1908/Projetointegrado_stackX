import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    
`;

export const HeaderMenu = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background-image: url("src/assets/images/foto.png");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;

    img{
        width: 17rem;
        height: 17rem;
        border-radius: 50%;
        
    }
    h1{
        font-size: 4.5rem;
        color: white;
        -webkit-text-stroke: 0.2rem #3B3B3B;
        
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #B7A99A;

    h1 {
        font-size: 3rem;
        color: #222233;
        margin-top: 1rem;
    }
`;

export const AboutUs = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 50%;
        height: 90vh;
        margin: 1.25rem;
        border-radius: 12.5rem 0;
    }
`;

export const Description = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
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

    p{
        width:  80%;
        height: auto ;
        font-size: 1.5rem;
        color: #E6FFF6;
        padding: 0.5rem;
    }

    button{
        width: 8rem;
        height: 2rem;
        color: black;
        font-size: 0.93rem;
        margin-top: 1.25rem;
        border: none;
        border-radius: 0.75rem;
        background: var(--bg_button);        
        cursor: pointer;
        transition: background-color 0.5s ease-in-out;

        &:hover {
            background-color: var(--bg_button_click);
        } 

        a{
            color: #222233;
            text-decoration: none;
        }
    }


    

    
`;

