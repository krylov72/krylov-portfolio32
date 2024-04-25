import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';


export const MobileMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => { setMenuIsOpen(!menuIsOpen) }
    return (
            <S.MobileMenu>
                <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                    <span></span>
                </S.BurgerButton>
                <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                    <Menu/>
                </S.MobileMenuPopup>

            </S.MobileMenu>
    );
};




