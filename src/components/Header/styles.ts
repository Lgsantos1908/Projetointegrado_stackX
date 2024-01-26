import styled from "styled-components"

export const MenuInicial = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 0.5rem;
    background: #394752;
    display: flex;
    align-items: center;
    justify-content:space-between;
    position: fixed ;
    z-index:1000;

    div{
        display: flex;
        align-items: center;
        cursor: pointer;

        h1{
            font-size: 1rem;
            border-radius: 10px;
            color: white;
        }
    }
    ul{
        display: flex;
        align-items: center;
        justify-content:center;

        li {
            padding-left: 3rem;
            display: flex;
            align-items: center;

            a {
                font-size: 1rem;
                color: #EEFBFF;
                font-weight: bold;
                text-decoration: none;

            }
            
            &:nth-child(3) a {
                font-size: 1.2rem;
                color: #95B0B7;
                margin-right: 1.25rem;
                
            }

            :hover{
                text-decoration: overline underline;
            }
            
        }          
        
    }    
`;

export const ImageLogo = styled.img`

    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin: 0.4rem;
`;


export const Delivery = styled.div`
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content:center;
    
    
    border-radius: 12px;
    transition: background-color 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #00B2C1;
                
    }

    img {
        width: 3rem;
        height: 3rem;
    }

    
    p {
        font-size: 1rem;
        color: #EEFBFF;
        font-weight: bold;
        transition: color 0.5s ease-in-out;
        
        
    }

    &:hover p {
        font-size: 1rem;
        color: #324B4E;  
                
    }


`;



