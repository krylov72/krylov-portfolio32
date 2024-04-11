import React from 'react';
import sprite from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
    iconSrc: string
    color?: string
    width?: string
    height?: string
    viewbox?: string
    selected?: boolean
}

export const Icon = (props:IconPropsType) => {
    return (
        <div>
            <svg width={props.width || '20px'} height={props.height || '20px'} viewBox={props.viewbox || '0 0 22 22'} fill="none" xmlns="http://www.w3.org/2000/svg" color={props.color}>
                <use xlinkHref={ `${sprite}#${props.iconSrc}`}></use>
            </svg> 
        </div>
    );
};
