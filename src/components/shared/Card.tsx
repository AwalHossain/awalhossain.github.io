import React from 'react';

type CardMode = 'row' | 'column';

type CardProps = {
    children: React.ReactNode,
    mode?: CardMode,
};

export const cardModeRow: CardMode = 'row';
export const cardModeColumn: CardMode = 'column';

const Card = (props: CardProps): React.ReactElement | null => {
  const { children, mode } = props;

  if (!children) {
    return null;
  }

  const commonCardStyles = 'transition duration-200 ease-in-out shadow-lg rounded-md overflow-hidden bg-gray-100 dark:bg-gray-900 flex flex-col';

  const classes = mode === cardModeRow ? `${commonCardStyles} sm:flex-row items-stretch`
    : `${commonCardStyles}`;

  return (
    <div className={classes}>
      {children}
    </div>

  );
};

export default Card;
