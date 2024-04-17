import React from 'react';
import { S } from '../HeaderMenu_Styles';


export const menuItem = [
    {
        id:1,
        name:'Home'
    },
    {
        id:2,
        name:'About me'
    },
    {
        id:3,
        name:'Skills'
    },
    {
        id:4,
        name:'Portfolio'
    },
    {
        id:5,
        name:'Contacts'
    },
]

export const Menu: React.FC = () => {
    return (
        <S.ListMenu>
            {menuItem.map((item, index) => (
                <S.MenuItem key={index}>
                    <S.Item href="">{item.name}</S.Item>
                </S.MenuItem>
            )
            )}
        </S.ListMenu>
    );
};

