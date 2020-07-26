import styled, {css} from "styled-components";
import {Chat, Rocketseat, Favorite} from '../../styles/Icons';

export const Container = styled.div`
display:flex;
flex-direction: column;

/* 14 para cima e para baixo e 16 para os lados */
padding: 14px 16px;

border-bottom: 1px solid var(--outlined);
max-width: 100%;
`;

export const Retweeted = styled.div`
display: flex;
align-items: center;
`;

export const RocketseatIcon = styled(Rocketseat)`
width: 16px;
height: 16px;

margin-left: 35px;
margin-right: 9px;

>path {
    fill:var(--gray);
}
`;

export const Body = styled.div`
display: flex;
margin-top: 3px;

position: relative;
`;

export const Avatar = styled.div`
width: 49px;
height:49px;
border-radius: 50%;
/* Para não ficar esticado */
flex-shrink: 0;
background: var(--gray);

position: absolute;
top: 0;
left: 0;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;

width: 100%;
margin-top: 2px;
padding-left: 60px;
`;

export const Header = styled.div`
/* Deixa tudo em uma linha */
display:flex;
align-items: center;

font-size: 15px;

/* Nunca quebra a linha */
white-space:nowrap;

> strong{
    margin-right: 5px;
}

> span, time{
    color: var(--gray);
}

> strong, span {
    white-space: nowrap;/** Não quebra a linha */
    text-overflow: ellipsis;/** Coloca os 3 pontinhos quando fica muito pequeno */
    overflow: hidden;/** Esconde o texto */
}
`;

/*Cria o ponto entre o @willtuner ea data */
export const Dot = styled.div`
background: var(--gray);
width: 2px;
height: 2px;
margin: 0 10px;
`;


export const Description = styled.p`
font-size: 14px;
margin-top: 4px;
`;

export const ImageContent = styled.div`
margin-top: 12px;
width: 100%;
height: min(285px, max(175px, 41px));

background: var(--outline);
border-radius: 14px;

cursor: pointer;
&:hover {
    opacity: 0.7;
}
`;

export const Icons = styled.div` 
display: flex;
align-items: center;
/* separa os itens em espaços iguais */
justify-content: space-between;
/* Quebra a linha dividindo os icons  */
flex-wrap: wrap;
/* Margin 11 cima/baixo, auto esquerda/direita e 0 para baixo(forçado) */
margin: 11px auto 0;
/* para telas pequenas como mobile */
width: 100%;

/* Ajusta os icones mais centralizados ao meio */
@media (min-width: 330px){
    width: 63%;
}

>div{
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
}
`;

export const Status = styled.div`
display: flex;
align-items: center;

font-size: 14px;
>svg {
    margin-right: 5px;
}

/* Selecionar o primeiro icone */
&:nth-child(1){
    /* Pegar o pai e os filhos */
    &, 
    > svg path{
        color: var(--gray);
    }
}
/* Selecionar o segundo icone */
&:nth-child(2){
    color: var(--retweet);
    /* Pegar o pai e os filhos */
    > svg path{
        fill: var(--retweet);
    }
}
/* Selecionar o terceiro icone */
&:nth-child(3){
    color: var(--like);

    > svg{
        fill: var(--like);
    }
}
`;

const iconCSS = css`
    width: 19px;
    height: 19px;
`;

export const CommentIcon = styled(Chat)`${iconCSS}`;
export const RetweetIcon = styled(Rocketseat)`${iconCSS}`;
export const LikeIcon = styled(Favorite)`${iconCSS}`;