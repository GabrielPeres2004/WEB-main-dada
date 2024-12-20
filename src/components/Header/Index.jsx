import { Container,ShoppingCart } from "./style";

import { FiList, FiShoppingCart, FiSearch,FiLogOut } from "react-icons/fi";

import { Logo} from '../Logo'
import { Input } from '../Input'
import { Button } from '../Button'

export function Header({onOpenMenu, closeHeader}){
    
    return( 
        <Container data-menu-is-open={closeHeader}>

            <Button 
            onClick={onOpenMenu}
            id='openMenu'
            size={24}
            icon={FiList}
            />

            <Logo />

            <Input 
            id="input"
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
            />
            
            <Button
            id="CartItems"
            size={18}
            icon={FiShoppingCart}
            title="Pedidos (0)"
            />

            <Button
            id="signOut"
            size={30}
            icon={FiLogOut}
            />

            <ShoppingCart id="ShoppingCart">
                <FiShoppingCart/>
                <div id="numberCart">
                    <p>0</p>
                </div>
            </ShoppingCart>

        </Container>
    )

}