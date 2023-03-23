import styled from "styled-components";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:600px) {
        flex-direction: column;
    }
`
export const Styledflyodata = styled(Hstackflexi)`
    width:100%;
    height:100%;
    gap:2%;
    justify-content: center;
    align-items: flex-end;
    margin: 19% 0 0;
    @media screen and (max-width:1025px) {
        margin: 8% 0 0;
    }
    @media screen and (max-width:600px) {
        margin: 40% 0 0;
    }
`
//Styled for Left side:
export const Leftsider = styled(Vstack)`
    width:24%;
    height:auto;
    padding:35px 0;
    background-color: yellow;
    border-top-right-radius: 110px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: var(--Dark-Blue);
    @media screen and (max-width:1025px) {
        width:80%;
        margin: 0 0 0 20px;
    }
    @media screen and (max-width:600px) {
        width:90%;
        margin:0 20px 20px;
    }
`
export const Logo = styled.img`
    width: 39%;
    height: 21%;
    margin:0 12% 9%;
`
export const SpreadIcon = styled(Hstack)`
    justify-content: left;
    gap:6%;
    margin:0 12%;
`
export const Document = styled.img`
    width: 8.1%;
    height: 23px;
    padding:12px;
    border-radius: 11px;
    background-color: var(--Very-Dark-Blue);
`
export const Folder = styled.img`
    width: 9%;
    height: 19px;
    padding:14px 11px;
    border-radius: 10px;
    background-color: var(--Very-Dark-Blue);
`
export const Upload = styled.img`
    width: 9%;
    height: 16px;
    padding:16px 11px;
    border-radius: 10px;
    background-color: var(--Very-Dark-Blue);
`
//Styled for Right side:
export const Rightsider = styled(Vstack)`
    width:37%;
    height:auto;
    border-radius: 10px;
    background-color: var(--Dark-Blue);
    .maininfostorage{
        font-size: .965em;
        font-weight: var(--regular);
        color:var(--Very-Grayish-Blue);
        margin: 7% 8% 2%;
    }
    span{
        font-weight: var(--bold);
        color:var(--Pale-Blue);
    }
    @media screen and (max-width:1025px) {
        width:120%;
        margin:0 20px 0 0;
    }
    @media screen and (max-width:600px) {
        width:90%;
        margin: 0 20px;
        .maininfostorage{
            text-align: center;
        }
    }
`
export const BGsliderbar = styled.div`
    position:relative;
    display: flex;
    width:auto;
    height:19px;
    border-radius: 22px;
    background-color: var(--Almost-Dark-Blue);
    align-items: center;
    margin:1% 8%;
`
export const Sliderbar = styled.div`
    display: flex;
    width:73%;
    height:80%;
    border-radius: 22px;
    background: var(--Gradient);
    align-items: center;
    justify-content: flex-end;
    margin:0 .6%;
`
export const Slidercircle = styled.div`
    width:12px;
    height:12px;
    border-radius: 50%;
    background-color:var(--Pale-Blue);
    margin:0 .6%;
`
export const Gigspreader = styled(Hstack)`
    justify-content: space-between;
    font-size: .96em;
    letter-spacing: -0.05em;
    font-weight: var(--bold);
    color:var(--Pale-Blue);
    margin: 0 8% 7%;
`
export const Gigsleft = styled(Hstack)`
    position: absolute;
    width:170px;
    height:70px;
    border-radius: 10px;
    background-color: var(--Pale-Blue);
    align-items: center;
    justify-content: center;
    gap:6%;
    bottom:330%;
    right:0;
    .gigsleft{
        font-size: 2.6em;
        font-weight: var(--bold);
        color:var(--Very-Dark-Blue);
    }
    .GBleft{
        font-size: .92em;
        font-weight: var(--bold);
        color:var(--Grayish-Blue);
        text-transform: uppercase;
    }
    @media screen and (max-width:600px) {
        bottom:-550%;
        right:20%;
    }
`
export const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-top: 0;
    border-right: 0;
    border-top: 50px solid var(--Pale-Blue);
    cursor: pointer;
    position: absolute;
    bottom:220%;
    right:0;
    @media screen and (max-width:600px) {
        display: none;
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    color: var(--Grayish-Blue);
    margin: 20px auto 10px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:0;
    p{
        font-size: .7rem;
    }
`