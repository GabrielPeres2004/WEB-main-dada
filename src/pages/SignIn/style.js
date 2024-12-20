import styled from "styled-components"
import { LAYOUTBREAKPOINTS } from "../../styles/layoutBreakpoints"


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

width: 100%;
height: 100vh;

padding: 2rem;
margin-top: 5.2rem;

@media (min-width: ${LAYOUTBREAKPOINTS.MD}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 0;
    
    padding: 8rem;
    
}

    

`

export const Form = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

width: 100%;
height: max-content;

border-radius: 1rem;

margin-top: 2rem;

h1{
    font-size: .1rem;
    background: none;
    color: transparent;
    
}

@media (min-width: ${LAYOUTBREAKPOINTS.MD}) {
    background-color: ${({ theme }) => theme.COLORS.DARK_300};
    padding: 6.4rem;
    

    h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 3.2rem;
        margin-top: 3.2rem;
        margin-bottom: 3.2rem;
        font-weight: 500;
    }


    section {

        button {
            margin-top: 1rem;
        }
    }

    
}

`