import styled, { css } from 'styled-components';
import { ArrowLeft, Home, Search, Notifications, Email } from '../../styles/Icons';


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;
export const Header = styled.div`
  z-index: 2;
  /* Fica presso na parte da tela */
  position: sticky;
  top: 0;
  background: var(--primary);
  display: flex;
  align-items: center;
  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &hove {
      background: var(--twitter-dark-hover);
    }
  }
`;
export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 15px;
    color: var(--gray);
  }
`;

const iconCSS = css`
  width:31px;
  height: 31px;
  cursor: pointer;

  /* Cor do item */
  fill: var(--gray);

  &:hover,
  &.active{
    fill: var(--twitter);
  }
`;

export const BottonMenu = styled.div`
/* Joga para baixo o menu */
position: fixed;
bottom: 0;
left: 0;
z-index: 2;

background: var(--primary);
width: 100%;
border-top: 1px solid var(--outline);

display: flex;
justify-content: space-between;

/* Calculo para definir o tamanho automático da botton menu */
padding: 8px min(46px, max(10vh, 10px));

/* Apartir de 500px a boton menu some */
@media (min-width: 500px){
  display: none;
}
`; 
export const HomeIcon = styled(Home)`
${iconCSS}
`; 
export const SearchIcon = styled(Search)`
${iconCSS}
`; 
export const BellIcon = styled(Notifications)`
${iconCSS}
`; 
export const EmailIcon = styled(Email)`
${iconCSS}
`; 
