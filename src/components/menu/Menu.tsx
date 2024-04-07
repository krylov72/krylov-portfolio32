import React from 'react';
import styled from 'styled-components';


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
    
`

const ListMenu = styled.ul`
    display:flex;
    gap:40px;
    justify-content:center;
`
const MenuItem = styled.li`
    
`
const Item = styled.a`
    
`

