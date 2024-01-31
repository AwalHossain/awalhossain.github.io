import React from 'react';
import Row from './Row';

type CardActionsProps = {
    children: React.ReactNode,
    className?: string,
};

const CardActions = (props: CardActionsProps): React.ReactElement | null => {
    const { children, className = 'px-4 pb-4' } = props;

    if (!children) {
        return null;
    }

    return (
        <div className={className}>
            <Row className='justify-between'>
                {children}
            </Row>
        </div>
    );
};

export default CardActions;
