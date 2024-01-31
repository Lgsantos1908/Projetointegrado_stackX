import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #324B4E;
        --bg_footer: #fff;
        --bg_form: #627C7F;
        --bg_button: #00C59D ;
        --bg_button_click: #00B2C1;
        --title: #617C7F;
        
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter',sans-sarif;
        font-weight: 400;
        font-size: 1rem;
        background: var(--background);
        
    }

`;