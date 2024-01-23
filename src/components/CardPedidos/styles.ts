import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
`;

export const FormPedido = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    form {
        width: 600px;
        height: auto;
        margin-top: 60px;
        padding: 15px;
        border-radius:  50px 0;
        background: #627C7F;
    }
  
`;

export const DadosItem = styled.div`
    display: flex;
    
    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        padding: 5px;

        h4  {
            margin-top: 10px;
        }
        h3  {
            margin-top: 10px;
        }
        }

        img {
            width: 50%;
            border-radius: 20px;
        }
`;

export const InfoInput = styled.div`
    width: 65%;
    padding: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        padding: 10px;

            input[type="button"]{
                width: 9rem;
                height: 2.2rem;
                border: none;              
                color: black;
                border-radius: 12px;
                background: #00C59D;        
                cursor: pointer;
                transition: background-color 0.5s ease-in-out;

                &:hover {
                background-color: #00B2C1;
            }
            }

            
    }

    
    

    input[type="number"] {
        width: auto;
        border: 1px solid #ccc;
        padding: 5px;
        border-radius: 10px;
    }

    
`;

export const BtnGerarPedido = styled.div`
    margin-top: 15px;
    width: 90%;
    height: 2rem;
    display: flex;
    justify-content: end;
    position: fixed;
    


    input {
        width: 8rem;
        height: 2rem;
        color: black;
        font-size: 15px;
        border: none;
        border-radius: 12px;
        background: #00C59D;        
        cursor: pointer;
        transition: background-color 0.5s ease-in-out;

        &:hover {
            background-color: #00B2C1;
        }   
    }

    
`;
