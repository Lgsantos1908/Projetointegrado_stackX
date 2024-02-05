import styled from "styled-components"

export const Container = styled.div`
    
`;

export const Content = styled.div`

    div{
        padding: 3rem;

        h1{
            width: 100%;
            font-size: 3rem;
            color: var(--title);
            margin-top: 1.78rem;
            padding: 0.8rem;
            display: flex;
            justify-content:start;
            
        }
    }
    h1{
            width: 100%;
            font-size: 2rem;
            color: var(--title);
            margin-top: 1.78rem;
            padding: 0.8rem;
            display: flex;
            justify-content:center;
            
        }

    input {
            width: auto;
            height: 2rem;
            border: 1px solid #ccc;
            padding:0.31rem;
            margin:0.31rem;
            border-radius: 0.62rem;
        }
    
    input[type="submit"] {
            width: 8rem;
            height: 2rem;
            color: black;
            font-size: 0.93rem;
            border: none;
            margin:0.31rem;
            border-radius: 0.75rem;
            background: var(--bg_button);        
            cursor: pointer;
            transition: background-color 0.5s ease-in-out;

            &:hover {
                background-color: var(--bg_button_click);
            }   
        }
`;

export const TableContent = styled.table`
    padding: 1.6rem 3rem;
    width: 100%;
    font-family: "Inter";    

    thead {
        
        tr {
            display: flex;
            align-items: center;
            justify-content: space-around;

            th {
                width: 200px;
                height: 60px;
                text-align: initial;
                font-weight: 600;
                font-size: 1rem;
                line-height: 1.3rem;
                color: var(--grey-400);  
                display: flex;
                align-items: center;
                justify-content: space-around;          
            }
        }
    }   

        tbody {
        
            tr{ 
                display: flex;
                justify-content: space-between;
                align-items: center;

                td {
                    
                    width: 200px;
                    height: 60px;
                    border-top: 1px solid rgba(161, 161, 170, 0.3);
                    font-weight: 500;
                    font-size: 1rem;
                    line-height: 1.6rem;
                    color: var(--white-400);
                    padding: 0.75rem 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                button {
                    background: transparent;
                    border: 0;
                    cursor: pointer;
                    color: white;
                    transition: color 0.2s;
                    line-height: 0;
                    border-radius: 0.12rem;

                    :hover {
                        cursor: pointer;
                        color: red;
                    }
                }   
            
        
            }
        }

        

       
        
        
`;