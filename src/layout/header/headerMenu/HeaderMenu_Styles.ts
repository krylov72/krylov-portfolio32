import styled, { css } from "styled-components"
import { ColorTheme } from "../../../styles/Theme"
import { MenuAnimation, MenuAnimationNotHover } from "../../../components/Animations"

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


// MobileMenu

const MobileMenu = styled.nav`
    padding:32px 0;
    border-bottom:1px solid ${ColorTheme.fontcolors.secondfont};
    position:relative;
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
position:fixed;
background-color: rgba(31,31,32,0.9);
top:0;
left: 0;
right: 0;
bottom: 0;
z-index:9999;
display:none;

${props => props.isOpen && css<{isOpen: boolean}>`
    display:flex;
    justify-content:center;
    align-items:center;
`}
    
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position:absolute;
    display:flex;
    align-items:flex-start;
    justify-content:flex-end;
    background-color: transparent;
    top:30px;
    right:5px;
    width: 100px;
    height: 100px;
    z-index:999999;

    span{
        display:block;
        width: 36px;
        height:2px;
       background-color:${ColorTheme.fontcolors.mainfont};
        position:absolute;
        
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color:transparent;
        `}

        &::before{
            content:'';
            display:block;
            width: 36px;
            height:2px;
            background-color:${ColorTheme.fontcolors.mainfont};
            position:absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(-45deg) translateY(0);
            
        `}
        }
        &::after{
            content:'';
            display:block;
            width: 26px;
            height:2px;
            background-color:${ColorTheme.fontcolors.mainfont};
            position:absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(45deg) translateY(0);
            width:36px;
            
        `}
        }
    }
`

//DesktopMenu

const DesktopMenu = styled.nav`
    padding:40px 0;
    border-bottom:1px solid ${ColorTheme.fontcolors.secondfont};

    @media ${ColorTheme.media.tablet} {
        padding:0;
    }
`

export const S = {
    ListMenu,
    MenuItem,
    Item,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu

}