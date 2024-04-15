import React from 'react';
import styled from 'styled-components';
import { ColorTheme } from '../../styles/Theme';
import { MenuAnimation, MenuAnimationNotHover } from '../Animations';


const menuItem = [
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

export const Menu = () => {
    return (
        <div>
            <StyledMenu>
                <ListMenu>
                    {menuItem.map((item,index) => (
                        <MenuItem key={index}>
                            <Item href="">{item.name}</Item>
                        </MenuItem>
                    )
                )} 
                </ListMenu>
            </StyledMenu>
        </div>
    );
};


const StyledMenu = styled.nav`
    padding:32px 0;
    border-bottom:1px solid ${ColorTheme.fontcolors.secondfont};

    @media ${ColorTheme.media.tablet} {
        padding:0;
    }
`

const ListMenu = styled.ul`
    display:flex;
    gap:40px;
    justify-content:space-between;
    @media ${ColorTheme.media.tablet} {
        display:none;
    }
`
const MenuItem = styled.li`
 &:hover {
        animation: ${MenuAnimation} 0.8s ease;
        animation-fill-mode:forwards;
    }
    &:not(:hover) {
        animation: ${MenuAnimationNotHover} 0.8s ease;
    }
    
`
const Item = styled.a`
    font-size:18px;
    font-weight:600;
    line-height:-1px;
    color:${ColorTheme.fontcolors.secondfont};

    &:hover{
        transition: color 1s;
        color: ${ColorTheme.fontcolors.mainfont};
    }
   
`

