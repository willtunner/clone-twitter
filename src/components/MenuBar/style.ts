import styled,{css} from "styled-components";
import { 
Home,
Notifications,
Email,
FavoriteBorder,
Person,
ExitToApp,
Rocketseat    
} from '../../styles/Icons';

export const Container = styled.div`
/* De inicio o container todo não aparece na tela */
display: none;

/* Se a tela for maior que 500px aparece na tela */
@media (min-width: 500px){
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* Fica fixada na tela */
    position: sticky;
    top: 0;
    left: 0%;

    padding: 9px 19px 20px;

    /* Altura maxima da tela */
    max-height: 100vh;

    /* Coloca um scroll na tela para ler conteudos */
    overflow-y: auto;

}
`;
export const Topside = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 1280px){
    align-items: flex-start;
}
`;

export const Logo = styled(Rocketseat)`
width: 41px;
height: 41px;

> path {
    fill: var(--twitter);
}

margin-bottom: 20px;
`;

export const MenuButton = styled.button`
display: flex;
align-items: center;
flex-shrink: 0;

/* de inicio não aparece as letras do menu só os icones */
> span{
    display: none;
}

/* Depois de 1280px ele mostra os nomes do menu */
@media(min-width: 1280px){
>span{
    display: inline;
    margin-left: 19px;

    font-weight: bold;
    font-size: 19px;
}

padding-right: 15px;
}

padding: 8.25px 0;
outline: 0;

/* Apartir do segundo botão */
& + button {
margin-top: 10px;
}

/* Ultimo botão de twittar */
& + button:last-child{
    margin-top: 33px;
    width: 40px;
    height: 40px;

    /* o nome do botão não apare quando a tela esta menor */
    > span{
        display: none;
    }

    /* O nome do botão aparece quando a tela está maior de 1280px */
    @media (min-width: 1280px){
        width: 100%;

        /* Como se não tivesse mexido em nada */
        height: unset;

        >span{
            display: inline;
        }
    }
}

cursor: pointer;
border-radius: 25px;

&:hover{
    background: var(--twitter-dark-hover);
}

&:hover, 
&.active{
    span, 
    svg{
        color: var(--twitter);
        fill: var(--twitter);
    }
}
`;


const iconCSS = css`
flex-shrink: 0;

width: 30px;
height: 30px;
color: var(--white);
`;

export const Botside = styled.div`
margin-top: 20px;
display: flex;
align-items: center;
`;
export const Avatar = styled.div`
width: 39px;
height: 39px;

flex-shrink: 0;
border-radius: 50%;
background: var(--gray);
`;

export const ProfileData = styled.div`
/* Começa sem aparecer */
display: none;

@media (min-width: 1280px){
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px
    > span{
        color: var(--gray);
    }
}
`;
export const ExitIcon = styled(ExitToApp)`
display: none;

@media (min-width: 1280px){
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;

    &:hover{
        > path{
            color: var(--like);
        }
    }
}
`;

export const HomeIcon = styled(Home)`${iconCSS}`;
export const BellIcon = styled(Notifications)`${iconCSS}`;
export const EmailIcon = styled(Email)`${iconCSS}`;
export const FavoriteIcon = styled(FavoriteBorder)`${iconCSS}`;
export const ProfileIcon = styled(Person)`${iconCSS}`;

