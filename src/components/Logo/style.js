import styled from "styled-components";
import { LAYOUTBREAKPOINTS } from "../../styles/layoutBreakpoints";



export const Container = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;

width: 100%;


h1 {
    margin-left: 1.6rem;
    font-size: 2.4rem;
    font-family: Roboto;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
}



@media (min-width: ${LAYOUTBREAKPOINTS.MD}) {
    h1 {
        font-size: 4.2rem;
    }
}

`