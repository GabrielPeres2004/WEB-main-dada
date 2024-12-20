import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

padding: 1rem ;

width: 100%;


div {
    width: 100%;

    
    h2 {
        margin-left: .5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-weight: 500;
        margin-bottom: .8rem;
    }

   div {
        margin-bottom: 4.2rem;
    }


}


`