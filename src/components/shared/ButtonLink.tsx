import React from 'react';
import HyperLink, { HyperLinkProps } from './HyperLink';

type ButtonLinkProps = HyperLinkProps;

const ButtonLink = (props: ButtonLinkProps): React.ReactElement => {
  const {
    className,
    hoverClassName = '',
    children,
    ...rest
  } = props;

  const hoverButtonClasses = `hover:bg-black hover:text-white ${hoverClassName} dark:hover:bg-gray-500`;
  const buttonClasses = 'bg-white dark:bg-gray-800 py-1 px-2 rounded shadow-sm border border-solid border-gray-300';
  const classes = `${className} ${buttonClasses}`;

  return (
    <HyperLink
      {...rest}
      className={classes}
      hoverClassName={hoverButtonClasses}
    >
      {children}
    </HyperLink>
  );
};

export default ButtonLink;
