import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

/* html {
    font-size: calc(15px + 0.390625vw);
} */

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
.transactions-card{
    overflow-y:scroll;
    max-height:325px;
}

.strategy-signals-height{
    min-height:140px;   
}
.strategy-card-buttons{
}

//Dropdown buttondaki oku yok ediyor.
.no-caret::after{
    display: none;
}

//Slider

.slick-slide > div {
    margin: 0 10px;
}

`


