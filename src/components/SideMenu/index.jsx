import { Container, Header, Main } from "./style";

import { FiX,FiSearch , FiLogOut } from "react-icons/fi";
import { BiSolidDish } from "react-icons/bi";
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

import { Input } from '../Input'
import { Button } from '../Button'

export function SideMenu({menuIsOpen, onCloseMenu}){
    return(
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <Button 
                onClick={onCloseMenu}
                id='closeMenu'
                size={20}
                icon={FiX}
                />
                <h1>Menu</h1>
            </Header>

            <Main>

                <Input 
                id='input'
                icon={FiSearch}
                placeholder='Busque por pratos ou ingredientes'
                />
                
                <Button 
                id='button'
                icon={FiLogOut}
                title='Sair'
                />

                <Button 
                id='button'
                icon={FaHeart}
                title='Meus favoritos'
                />

                <Button 
                id='button'
                icon={BiSolidDish}
                title='Novo Prato'
                />

                <Button 
                id='button'
                icon={FaShoppingCart}
                title='Meus pedidos'
                />

                <Button 
                id='button'
                icon={FaShoppingCart}
                title='Pedidos'
                />
                


            </Main>

            

        </Container>
    )
}