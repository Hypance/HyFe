import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`



:root{
    --title-color: #062046;
    --comment-color: #757575;

    
}

p{
    margin: 0;
    padding: 0;
}



.page-title{
    color:var(--title-color);
    font-weight:600;
}

.card-title{
    color: var(--title-color); 
    font-weight:600;
}

.card-comment{
    color: var(--comment-color);
    font-weight:500;
}

.card{
    min-height:340px;
}

.transactions-card{
    overflow-y:scroll;
    max-height:325px;
}

`