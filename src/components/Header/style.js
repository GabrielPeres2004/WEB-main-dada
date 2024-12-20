import styled from "styled-components";
import { LAYOUTBREAKPOINTS } from "../../styles/layoutBreakpoints";

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: space-between;

width: 100%;

background-color: ${({ theme }) => theme.COLORS.DARK_300};
padding: 4.6rem 2rem 2.4rem;

&[data-menu-is-open='true']{
    display: none;
}

#openMenu {
    background: transparent;
    width: max-content;
}

#Logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    width: 100%;

  h1 {
     font-size: 2.2rem;
     margin-left: 1rem;
    }

    img {
        width: 2.4rem;
        height: 2.4rem;
        object-fit: cover;
    }
}

#input{
    display: none;
}

#CartItems{
    display: none;
}

#signOut{
    display: none;
}

@media (min-width: ${LAYOUTBREAKPOINTS.SM}) {
    padding: 5.6rem 1.2rem 2.4rem;

    #List {
        font-size: 3.2rem;
    }

    #Logo {
        h1 {
            font-size: 2.8rem;
        }
    }
} 

@media (min-width: ${LAYOUTBREAKPOINTS.MD}) {

    #openMenu, #List,#ShoppingCart{
        display: none;
    }
    
    #Logo{
        justify-content: flex-start;
        width: 45rem;
    }

    #input{
        display: flex;
        margin-inline: 0 1rem;
    }

    #CartItems {
        display: flex;
        width: 29rem;
    }

    #signOut{
        display: flex;
        width: max-content;
        background: transparent;
    }

}
        
`

export const ShoppingCart = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;


padding: 1.6rem;

svg {
    color: white;
    font-size: 2.8rem;
}

#numberCart{
    position: absolute;
    background-color: red;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    top: 1rem;
    right: 0rem;
    
    padding: 1rem;
    width: 2rem;
    height: 2rem;


    p {
        color: white;
    }
}

@media (min-width: ${LAYOUTBREAKPOINTS.SM}) {
    svg {
    font-size: 3.2rem;
}

#numberCart{
    padding: 1.2rem;
}


}

`