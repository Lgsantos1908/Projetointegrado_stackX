import styled from "styled-components"

export const Card = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    transition: transform 1500ms;
    transform-style: preserve-3d;    
   
`;

export const Container = styled.div`
    width: 310px;
    height: 380px;
    padding: 1.25rem;
    margin-top: 1.56rem;

    &:hover > ${Card} {
    cursor: pointer;
    transform: rotateY(180deg);
        h3{
            transform: rotateY(180deg);
        }
    }

    h3{
        color: white;
        height: 3.43rem;       
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
`;



export const CardFront = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
    position: absolute;
    backface-visibility: hidden;
    background-image: url('');
    background-size: cover;
    z-index:1;
    display: flex;
    justify-content: center;
    
`;

export const CardBack = styled.div`
    color: white;
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
    position: absolute;
    backface-visibility: hidden;
    background-color: #3a3a3a;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 5rem;

    p {
        font-size: 1.25rem;
        padding: 1.25rem;
    }

    h4{
        font-size: 2.18rem;
    }
    
`;
