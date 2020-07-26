import styled from 'styled-components';

// Dedine como vai ser o botão todo azul ou com borda
interface Props{
    outlined?: boolean;
}

export default styled.button<Props>`
/* se passou a propriedade como outlined fica transparente */
background: ${(props => props.outlined ? 'transparent' : 'var(--twitter)')};
/* se for outlined a cor da fonte fica azul se não branca */
color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
/* se for outlined muda a borda */
border: ${props => props.outlined ? '1px solid var(--twitter)': 'none'};

padding: 16px;
border-radius: 25px;

font-weight: bold;
font-size: 15px;

cursor: pointer;
outline: 0;

&:hover{
    background: ${props => props.outlined 
    ? 'var(--twitter-dark-hover)' 
    : 'var(--twitter-light-hover)'};
}
`;



