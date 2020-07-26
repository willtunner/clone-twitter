import styled from "styled-components";

export const Container = styled.div`
background: var(--primary);
`;
  
export const Wrapper = styled.div`
/* define a altura maxima da pagina e  */
height: 100%;
max-width: 1280px;
/*0 em cima e em baixo e auto dos lados */
margin: 0 auto;
/* torna flexivel possibilitando fazer estrutura 1 2 3 */
display: flex;
justify-content: center;
`;
