import React from 'react';
import sprite from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
    iconSrc: string
}

export const Icon = (props:IconPropsType) => {
    return (
        <div>
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={ `${sprite}#${props.iconSrc}`}></use>
            </svg> 
        </div>
    );
};
