import { IGatsbyImageData } from 'gatsby-plugin-image';
// import { UseImagesQuery } from './generated/UseImagesQuery';
import { useFluidCovers } from './useFluidCovers';

type UseFluidCoverProps = {
    imagePath?: string | null | undefined,
};

export const useFluidCover = (
  props: UseFluidCoverProps,
): IGatsbyImageData | undefined | null => {
  const { imagePath } = props;
  const allImages = useFluidCovers();

  if (!imagePath) {
    return undefined;
  }

  const foundNode = allImages.find(
    (node: any) => {
      return node.relativePath === imagePath;
    },
  );

  if (!foundNode) {
    return undefined;
  }

  return foundNode?.childImageSharp?.gatsbyImageData;
};
