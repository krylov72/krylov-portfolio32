import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';


export const MobileMenu = () => {
    return (
        <div>
            <S.MobileMenu>
                <S.BurgerButton isOpen={false}>
                    <span></span>
                </S.BurgerButton>
                <S.MobileMenuPopup isOpen={false}>
                    <Menu />
                </S.MobileMenuPopup>

            </S.MobileMenu>
        </div>
    );
};




