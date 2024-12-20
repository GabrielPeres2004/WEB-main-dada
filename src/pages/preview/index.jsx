import { Container } from "../Home/style";

import { Header } from "../../components/Header/Index";
import { SideMenu } from "../../components/SideMenu";
import { ButtonText } from "../../components/ButtonText";
import { useState } from "react";

import { FiArrowLeft } from "react-icons/fi";

export function Preview(){
    const [menuIsOpen, setMenuIsOpen] = useState(false)


    return(
        <Container>
            <SideMenu 
            menuIsOpen={menuIsOpen}
            onCloseMenu={() => setMenuIsOpen(false)}
            />
                        
            <Header 
            onOpenMenu={() => setMenuIsOpen(true)}
            closeHeader={menuIsOpen}
            />

            <ButtonText 
            icon={FiArrowLeft}
            title="Voltar"
            />



        </Container>
    )
       
}