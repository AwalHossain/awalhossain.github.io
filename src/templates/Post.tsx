import { PageProps, graphql } from 'gatsby';
import React from 'react';
import PostScreen from '../components/screens/PostScreen';
import { PostTemplateQuery } from './__generated__/PostTemplateQuer';

interface BlogPostProps extends PageProps {
    data: PostTemplateQuery
}

export const query = graphql`
  query PostTemplateQuery ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      fields {
        slug
      }
      internal {
        contentFilePath
      }
      frontmatter {
        title
        summary
        date(formatString: "DD MMMM, YYYY")
        cover {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH,
              quality: 95,
              transformOptions: {
                fit: COVER,
                cropFocus: CENTER,
                grayscale: false,
              },
            )
          }
        }
      }
    }
  }
`;

console.log(query, 'checking post template query');

const Post = (props: BlogPostProps) => {
  const { data, children } = props;

  return (
    <PostScreen post={data}> {children} </PostScreen>
  );
};

export default Post;
