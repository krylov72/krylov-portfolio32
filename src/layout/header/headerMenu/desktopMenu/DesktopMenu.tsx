import React from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';
import { Container } from '../../../../components/Container';

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
                <Menu />
        </S.DesktopMenu>
    );
};


