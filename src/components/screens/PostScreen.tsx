import React from 'react';
import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuer';
import Post from '../elements/Post';
import PageLayout from '../layouts/PageLayout';
import SEO, { ogTypeArticle, titleModeSuffix } from '../shared/SEO';

type PostProps = {
    post: PostTemplateQuery,
    children?: React.ReactNode
}

const PostScreen = (props: PostProps): React.ReactElement => {
  const { post, children } = props;

  console.log(post, 'post', children, 'children');

  return (
    <PageLayout>
      <SEO
        title={post.mdx?.frontmatter?.title || ''}
        titleMode={titleModeSuffix}
        description={post.mdx?.frontmatter?.summary || ''}
        image={post.mdx?.frontmatter?.cover?.childImageSharp?.gatsbyImageData?.images?.fallback?.src || ''}
        type={ogTypeArticle}
      />
      <Post post={post}>{children}</Post>
      <div className="flex flex-row justify-center items-center mt-16">
        <div className="max-w-md" />
      </div>
    </PageLayout>
  );
};

export default PostScreen;
