import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;    
`;

export const Description = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    height: 5rem;
    width: 25rem;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: .3s;
    transition: all .3s ease;

    p{
        color: #b0b0ba;
        padding-top: 0.32rem;
    }

    h4{

        text-transform: uppercase;
    }
`;

export const InfoFood = styled.div`
    height: 25rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

    input{
        display: none;
    }

    
    label {
        width: 5rem;
        height:20rem;
        border-radius: 0.75rem;
        background-size: cover;
        cursor: pointer;
        overflow: hidden;
        border-radius: 2rem;
        margin: 0 0.62rem ;
        display: flex;
        align-items: flex-end;
        transition: .6s cubic-bezier(.28,-0.03,0,.99);
        box-shadow: 0px 0.62px 1.8rem -0.31rem rgba(0,0,0,0.8);

        
        

        div {
            color: white;
            display: flex;
            flex-wrap: nowrap;

            button{
                background: #223;
                color: white;
                border-radius: 50%;
                width: 3rem;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 1rem;
                cursor: pointer;
            }
        }
    }

    input:checked + label {
            width: 37.5rem;

            ${Description} {
            opacity: 1;
            transform: translateY(0);
        }
    }
        
`;




