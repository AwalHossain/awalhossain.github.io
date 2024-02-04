import React from 'react';
import { BlogPageQuery } from '../../pages/__generated__/BlogPageQuery';
import PostList from '../elements/PostList';
import PageLayout from '../layouts/PageLayout';
import Badge from '../shared/Badge';
import PageHeader from '../shared/PageHeader';
import Row from '../shared/Row';
import SEO from '../shared/SEO';

type BlogScreenProps = {
    posts: BlogPageQuery
}

const BlogScreen = (props: BlogScreenProps) => {
  const { posts } = props;
  const postsNum = posts?.allMdx?.totalCount;
  console.log(posts, 'posts');

  return (
    <PageLayout>
      <SEO
        title="Blog"
        description="Articles about life, web-development and machine-learning"
      />
      <Row>
        <PageHeader>Blog</PageHeader>
        <Badge className="ml-3 self-start">{postsNum}</Badge>
      </Row>
      <PostList posts={posts} />
    </PageLayout>
  );
};

export default BlogScreen;
