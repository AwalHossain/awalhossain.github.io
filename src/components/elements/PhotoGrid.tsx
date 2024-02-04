import { useLocation } from '@gatsbyjs/reach-router';
import React from 'react';
import { useFluidCover } from '../../hooks/useFluidCover';
import { Details } from '../../types/Details';
import { Link } from '../../types/Link';
import { siteURL } from '../constants/siteMeta';
import Card from '../shared/Card';
import CardContent from '../shared/CardContent';
import CardMedia from '../shared/CardMedia';
import FluidImage from '../shared/FluidImage';
import HyperLink from '../shared/HyperLink';

type PhotoProps = {
    detail: Details | null | undefined
}

const PhotoGrid = (props: PhotoProps) => {
  const { detail } = props;

  const location = useLocation();

  const imagePath = detail?.image?.srcPath;
  const fluidImageFetched = useFluidCover({ imagePath });

  const imageLink: Link = {
    url: `${location?.origin || siteURL}${fluidImageFetched?.images?.fallback?.src}`,
  };

  return (
    <Card key={detail?.title}>
      <CardMedia link={imageLink}>
        <FluidImage fluidImage={fluidImageFetched} />
      </CardMedia>
      <CardContent>
        <HyperLink link={imageLink}>
          {detail?.title}
        </HyperLink>
        {/* {date}
                {detailsLink} */}
      </CardContent>
    </Card>
  );
};

export default PhotoGrid;
