import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

background: ${({ theme }) => theme.COLORS.DARK_900};


width: 100%;

border-radius: 2.4rem;
border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_300};

padding: 1.6rem;

&[data-menu-is-open='true']{
    display: none;
}

#favorite{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;


    svg {
        color: white;
    }

}

img {
    object-fit: cover ;
}

p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-top: 1rem;
    font-size: 1.4rem;
}

span {
    margin-top: .5rem;
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-size: 1.6rem;
}

#addToCart{
    display: flex;
    align-items: center;

    button {
        font-size: 2.4rem;
        margin-inline: .5rem;
        letter-spacing: .4rem;
    }
}

#buttonInclude{
    margin-top: 2rem;
}

`