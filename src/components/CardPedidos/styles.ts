import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
`;

export const Content = styled.div`

    h1 {
            
            font-size: 3rem;
            color: var(--title);
            padding: 0.8rem;
            display: flex;
            justify-content:start;
    }
`;

export const FormPedido = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    form {
        width: 37.5rem;
        height: auto;
        margin-top: 3.75rem;;
        padding: 0.94rem;
        border-radius: 3.13rem 0;
        background: var(--bg_form);
    }
  
`;

export const DadosItem = styled.div`
    display: flex;
    
    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        padding: 0.4rem;

        h4  {
            margin-top: 0.62rem;
        }
        h3  {
            margin-top: 0.62rem;
        }
        }

        img {
            width: 50%;
            border-radius: 1.25rem;
            
        }
`;

export const InfoInput = styled.div`
    width: 65%;
    padding: 1.13rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        padding: 0.62rem;

            input[type="button"]{
                width: 9rem;
                height: 2.2rem;
                border: none;              
                color: black;
                border-radius: 0.75rem;
                background: var(--bg_button);        
                cursor: pointer;
                transition: background-color 0.5s ease-in-out;

                &:hover {
                background-color: var(--bg_button_click);
            }
            }

            
    }

    
    

    input[type="number"] {
        width: auto;
        border: 0.06rem solid #ccc;
        padding: 0.31rem;
        border-radius: 0.62rem;
    }

    
`;

export const BtnGerarPedido = styled.div`
    margin-top: 0.93rem;
    width: 90%;
    height: 2rem;
    display: flex;
    justify-content: end;
    position: fixed;
    


    input {
        width: 8rem;
        height: 2rem;
        color: black;
        font-size: 0.93rem;
        border: none;
        border-radius: 0.75rem;
        background: var(--bg_button);        
        cursor: pointer;
        transition: background-color 0.5s ease-in-out;

        &:hover {
            background-color: var(--bg_button_click);
        }   
    }

    
`;
