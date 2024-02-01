import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

import { useFluidCover } from '../../hooks/useFluidCover';
import { Image } from '../../types/Image';

type FluidImageProps = {
    image?: Image | null | undefined,
    fluidImage?: IGatsbyImageData | null | undefined,
    className?: string,
};

const FluidImage = (props: FluidImageProps): React.ReactElement | null => {
    const { image, fluidImage: fluidImageProvided, className = '' } = props;

    const fluidImageFetched = useFluidCover({ imagePath: image?.srcPath });

    const fluidImage = fluidImageProvided || fluidImageFetched;


    if (!fluidImage) {
        // @TODO: Consider to return an image placeholder.
        return null;
    }


    return (
        <GatsbyImage
            image={fluidImage}
            style={{ height: '100%' }}
            alt={image?.caption || ''}
            title={image?.caption || ''}
            className={className}
        />
    );
};

export default FluidImage;
