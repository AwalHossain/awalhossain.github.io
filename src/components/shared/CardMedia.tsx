import React from 'react';
import { Link } from '../../types/Link';
import HyperLink from './HyperLink';



type CardMediaMode = 'row' | 'column';

export const cardMediaModeRow: CardMediaMode = 'row';
export const cardMediaModeColumn: CardMediaMode = 'column';

type CardMediaProps = {
    children: React.ReactNode,
    className?: string,
    mode?: CardMediaMode,
    link?: Link,
};


const CardMedia = (props: CardMediaProps) => {

    const { children, className, mode, link } = props;


    const linkClasses = link && link.url
        ? 'cursor-pointer'
        : '';

    if (!children) {
        return null;
    }

    const commonCardMediaStyles = `transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-48 bg-cover bg-gray-200 overflow-hidden block ${className} ${linkClasses}`;


    const classes = mode === cardMediaModeRow
        ? `${commonCardMediaStyles} sm:h-auto sm:w-2/5 lg:w-1/4`
        : `${commonCardMediaStyles}`;


    const wrappedChildren = link && link.url ? (
        <HyperLink link={link} formatted={false}>
            {children}
        </HyperLink>
    ) : children;

    return (
        <div className={classes}>
            {wrappedChildren}
        </div>
    );
}

export default CardMedia