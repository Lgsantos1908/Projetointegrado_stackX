import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 5rem;

    h1 {
    width: 100%;
    font-size: 3rem;
    color: #617C7F;
    padding: 0.8rem;
    display: flex;
    justify-content:start;
    }


    
`;

export const FormUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    form {
        width: 700px;
        height: 350px;
        padding: 15px;
        border-radius: 15px;
        background: #627C7F;
       
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        input{
            width: auto;
            border: 1px solid #ccc;
            padding: 5px;
            border-radius: 10px;
        }

        input[type="submit"] {
            width: 8rem;
            height: 2rem;
            color: black;
            font-size: 15px;
            border: none;
            border-radius: 12px;
            background: #00C59D; 
            margin-top: 10px;       
            cursor: pointer;
            transition: background-color 0.5s ease-in-out;

            &:hover {
                background-color: #00B2C1;
            }   
        }

    }
  
`;