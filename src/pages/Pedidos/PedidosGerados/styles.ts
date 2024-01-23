import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    div{
        width: 100%;
        padding: 3rem;

        h1{
            width: 100%;
            font-size: 3rem;
            color: #617C7F;
            margin-top: 1.78rem;
            padding: 0.8rem;
            display: flex;
            justify-content:start;
        }
    }

    input {
        width: 8rem;
        height: 2rem;
        margin-top: 1rem;
        background: #00C59D;
        border-radius: 10px;
        border: none;
        margin: 5px;
    }
    
`;

export const TableContent = styled.table`
    padding: 1.6rem 3.5rem;
    width: 100%;
    font-family: "Inter";
    

    thead {
        display: flex;
        align-items: center;
        justify-content: space-between;
        th {
            width: 200px;
            height: 60px;
            text-align: initial;
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.3rem;
            color: var(--grey-400);
            display: flex;
            justify-content: center;
            align-items: center;
            
            
        }
    }   

        div {
            padding: 0 10px;
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

                    button{
                        width: 200px;
                        height: 60px;
                        border-top: 1px solid rgba(161, 161, 170, 0.3);
                        display: flex;
                        align-items: center;
                        justify-content: center
                    }
                
            
                }
            }
            
            button {
                background: transparent;
                border: 0;
                cursor: pointer;
                color: white;
                transition: color 0.2s;
                line-height: 0;
                border-radius: 2px;

                &:hover{
                    cursor: pointer;
                    color: red;
                
                }
            }
        }
    

`;