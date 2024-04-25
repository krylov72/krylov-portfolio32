import React, { useState } from 'react';
import { S } from '../HeaderMenu_Styles';


export const menuItem = [
    {
        id:1,
        name:'Home',
        href:'home'
    },
    {
        id:2,
        name:'About me',
        href:'about me'
    },
    {
        id:3,
        name:'Skills',
        href: 'skills'
    },
    {
        id:4,
        name:'Portfolio',
        href: 'portfolio'
    },
    {
        id:5,
        name:'Contacts',
        href:'contacts'
    },
]

export const Menu: React.FC = () => {

    return (
        <S.ListMenu>
            {menuItem.map((item, index) => (
                <S.MenuItem key={index}>
                    <S.Item  activeClass='active' spy={true} smooth={true} to={item.href}>{item.name}</S.Item>
                </S.MenuItem>
            )
            )}
        </S.ListMenu>
    );
};

