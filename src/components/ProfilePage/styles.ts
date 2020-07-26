import styled, { css } from "styled-components";
import { LocationOn, Cake } from '../../styles/Icons';
import Button from '../Button';


export const Container = styled.div`
display: flex;
flex-direction: column;

max-height: 100%;

/* se for maior aparece o scroll */
overflow-y: auto;

scrollbar-width: none;  /** Firefox */
::-webkit-scrollbar{ /** Google Chrome */
    display: none;
}
`;

export const Banner = styled.div`
/* Não muda de tamanho, não deixa encolher */
flex-shrink: 0;

width: 100%;

/* Tamanho do banner */
height: min(33vw, 199px);

background: var(--twitter);
position: relative;

`;


export const Avatar = styled.div`
/* Calculo para deixar o avatar responsivo */
width: max(45px, min(135px, 22vw));
height: max(45px, min(135px, 22vw));

/* Bordar do avatar */
border: 3.75px solid var(--primary);
background: var(--gray);
border-radius: 50%;

/* Só funciona se o elemento pai nesse caso banner for position relative */
position: absolute;

/* maior valor entre -60 e -10 */
bottom: max(-60px, -10vw);
left: 15px;
`;


export const ProfileData = styled.div`
/* Calculo para fazer o profile descer e ficar abaixo do avatar */
padding: min(calc(10vh + 7px), 67px) 16px 0;

display: flex;
flex-direction: column;

position: relative;

> h1{
    font-weight: bold;
    font-size: 19px;
}
> h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
}
>p {
    font-size: 15px;
    margin-top: 11px;
    >a {
    text-decoration: none;
    color: var(--twitter);
}
}
>ul{
    /* para tirar as bolinhas da lista */
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    >li{
        font-weight: 15px;
        color: var(--gray);

        > svg {
        fill: var(--gray);
        margin-right: 5px;
    }
  }
}
`;

const iconCSS = css`
width: 20px;
height: 20px;

color: var(--gray);
`;

// Icones
export const LocationIcon = styled(LocationOn)`${iconCSS}`;
export const CakeIcon = styled(Cake)`${iconCSS}`;

export const Fallowage = styled.div`
display: flex;
>span{
    font-size: 15px;
    color: var(--gray);

/* Colora o seguindo e seguidores um ao lado do outro */
    & + span{
        margin-left: 20px;
    }
}
`; 

export const EditButton = styled(Button)`
position: absolute;
top: 2vh;
right: 7vh;

padding: 4px 16px;
font-size: 13px;

@media (min-width: 320px){
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
}
`;