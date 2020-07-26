import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--secondary);
    border-radius: 14px;
`;
export const Item = styled.div`

    /* Apartir do segundo item borda pra cima */
    & + div {
        border-top: 1px solid var(--outline);
    }

    /* Pega o primeiro item da lista  */
    &:first-child{
        padding-top: 13px;
    }

    /* Pega o ultimo item da lista e da um espaçamento maior*/
    &:last-child{
        padding-bottom: 17px;
    }
`;
export const Title = styled.div`
font-weight: bold;
font-size: 19px;
margin-left: 10px;
`;
