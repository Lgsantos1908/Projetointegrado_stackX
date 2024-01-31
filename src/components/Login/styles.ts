import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    padding: 5rem;;

   
    
`;

export const FormUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div{    
        width: 100%;
        h1 {
            
            font-size: 3rem;
            color: var(--title);
            padding: 0.8rem;
            display: flex;
            justify-content:start;
    }
    }
    
    form {
        width: 700px;
        height: 250px;
        padding: 15px;
        border-radius: 15px;
        background: var(--bg_form);
       
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

        input[type="button"] {
            width: 8rem;
            height: 2rem;
            color: black;
            font-size: 15px;
            border: none;
            border-radius: 12px;
            background: var(--bg_button);        
            cursor: pointer;
            transition: background-color 0.5s ease-in-out;

            &:hover {
                background-color: var(--bg_button_click);
            }   
        }

    }
  
`;

export const SaveButton = styled.div`

    width: 100%;        
    display: flex;
    margin: 0;
    
    h2 {
        font-size: 17px;
        margin: 4px 10px;
    }

`;