import styled from "styled-components";
import bgdesktop from '../images/bg-desktop.png';
import bgmobile from '../images/bg-mobile.png';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
    //Primary:
    --Gradient: linear-gradient(to right, hsl(6, 100%, 80%), hsl(335, 100%, 65%));
    //Neutral:
    --Pale-Blue: hsl(243, 100%, 93%);
    --Grayish-Blue: hsl(229, 7%, 55%);
    --Very-Grayish-Blue: hsl(229, 7%, 75%);
    --Dark-Blue: hsl(228, 56%, 26%);
    --Almost-Dark-Blue: hsl(229, 57%, 17%);
    --Very-Dark-Blue: hsl(229, 57%, 11%);
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    --regular:400;
    --bold: 700;
    *{
        margin:0;
    }
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    align-items: center;
    background-color: var(--Very-Dark-Blue);
    background-image: url(${bgdesktop});
    background-repeat: no-repeat;
    background-size:contain;
    background-position: 0 115%;
    @media screen and (max-width:1181px) {
        background-position: 100% 100%;
    }
    @media screen and (max-width:600px) {
        background-image: url(${bgmobile});
        background-size:100% 100%;
        background-position: center;
    }
`