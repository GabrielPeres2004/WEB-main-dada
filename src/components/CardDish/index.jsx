import { Container } from "./style";

import { FiMinus, FiPlus } from "react-icons/fi";
import { FaHeart } from 'react-icons/fa';
import { ButtonText } from '../ButtonText'
import { Button } from '../Button'

export function CardDish({menuIsOpen, data}){
    return(
        <Container data-menu-is-open={menuIsOpen}>
            <div id="favorite">
                <FaHeart />
            </div>

            <img src='/assets/Dish.png' alt="Imagem do prato" />

            <p>Salada</p>

            <span>R$ 49,97</span>

            <div id="addToCart">
                <ButtonText 
                icon={FiMinus}
                size={20}
                />
                
                <ButtonText 
                title='01'
                />

                <ButtonText 
                size={20}
                icon={FiPlus}
                />

            </div>

            <Button 
            id='buttonInclude'
            title='Incluir'
            />


        </Container>
    )
}