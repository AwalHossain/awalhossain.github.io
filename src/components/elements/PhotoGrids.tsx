import React from 'react';
import { Details } from '../../types/Details';
import Badge from '../shared/Badge';
import Cards from '../shared/Cards';
import H, { hLevel } from '../shared/H';
import Row from '../shared/Row';
import PhotoGrid from './PhotoGrid';

type PhotoProps = {
    details: Details[] | null | undefined
}

const PhotoGrids = (props: PhotoProps) => {
  const { details } = props;

  if (!details || details.length === 0) {
    return null;
  }

  const detailsElements = details.map((detail: Details, idx: number) => {
    return (
      <PhotoGrid detail={detail} key={idx} />
    );
  });

  return (
    <div className="mt-6 mb-6">
      <Row className="mb-3">
        <H level={hLevel.h2} id="achievements">
          Photos
        </H>
        <Badge className="ml-3 self-start">
          {details.length}
        </Badge>
      </Row>
      <Cards>
        {detailsElements}
      </Cards>
    </div>
  );
};

export default PhotoGrids;
