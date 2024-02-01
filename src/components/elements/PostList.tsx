import React from 'react'
import { BlogPageQuery, BlogPageQuery_allMdx_nodes } from '../../pages/__generated__/BlogPageQuery'
import Cards, { cardModeList } from '../shared/Cards'
import PostPreview from './PostPreview'

type PostListProps = {
    posts: BlogPageQuery
}

const PostList = (props: PostListProps): React.ReactElement => {

    const { posts } = props;

    const postsElements = posts.allMdx.nodes.map(
        (node: BlogPageQuery_allMdx_nodes) => {
            return <PostPreview post={node} key={node.id} />;
        },
    );


    return (
        <Cards mode={cardModeList}>
            {postsElements}
        </Cards>
    )
}

export default PostList