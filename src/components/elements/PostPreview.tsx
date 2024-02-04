import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';
import { FiClock } from '@react-icons/all-files/fi/FiClock';
import React from 'react';
import { BlogPageQuery_allMdx_nodes } from '../../pages/__generated__/BlogPageQuery';
import { Link } from '../../types/Link';
import { timeToReadFromRemark } from '../../utils/time';
import Card, { cardModeRow } from '../shared/Card';
import CardContent, { cardContentModeRow } from '../shared/CardContent';
import CardMedia, { cardMediaModeRow } from '../shared/CardMedia';
import CardTitle from '../shared/CardTitle';
import FluidImage from '../shared/FluidImage';
import Row from '../shared/Row';

type PostPreviewProops = {
    post: BlogPageQuery_allMdx_nodes
}

const PostPreview = (props: PostPreviewProops): React.ReactElement => {
  const { post } = props;

  const postLink: Link = {
    url: post.fields?.slug,
  };

  const postCover = post.frontmatter?.cover?.childImageSharp?.gatsbyImageData
    ? (
      <FluidImage fluidImage={post.frontmatter?.cover?.childImageSharp?.gatsbyImageData} />
    ) : null;

  const postSummary = post.frontmatter?.summary ? (
    <div className="font-light">
      {post.frontmatter?.summary}
    </div>
  ) : null;

  const dateElement = post.frontmatter?.date ? (
    <Row className="mr-6">
      <FiCalendar className="mr-1" />
      {post.frontmatter.date}
    </Row>
  ) : null;

  const timeToRead = post?.timeToRead ? (
    <Row>
      <FiClock className="mr-1" />
      {timeToReadFromRemark(post?.timeToRead)} min to read
    </Row>
  ) : null;

  console.log(post, 'post checkign');

  return (
    <Card mode={cardModeRow}>
      <CardMedia mode={cardMediaModeRow} link={postLink}>
        {postCover}
      </CardMedia>
      <CardContent mode={cardContentModeRow}>
        <CardTitle link={postLink}>
          {post?.frontmatter?.title}
        </CardTitle>
        <Row className="text-xs text-gray-500 mb-3">
          {dateElement}
          {timeToRead}
        </Row>
        {postSummary}
      </CardContent>
    </Card>
  );
};

export default PostPreview;
