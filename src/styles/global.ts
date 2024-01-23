import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #324B4E;
        --white: #FFFFF;
        --white-600: #F0F0F0;
        --white-400: #ededed;

        --grey-300: #C6C6D3;
        --grey-400: #a1a1aa;

        --dark-300: #3F3F46;
        --dark-400: #27272A;
        --dark-500: #3E3E41;
        --dark-600: #1C1C1C;
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