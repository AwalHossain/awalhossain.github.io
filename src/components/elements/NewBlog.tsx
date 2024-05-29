import { MDXProvider } from '@mdx-js/react';
import { PageProps, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import MDXContent from '../../posts/2024/streaming/index.mdx';
import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuer';

interface BlogPostProps extends PageProps {
  data: PostTemplateQuery
}


const BlogPostContent = () => {
  // Use the useStaticQuery hook with your GraphQL query
  const blogPostData = useStaticQuery(graphql`
    query GetSingleBlogPost {
      mdx(fields: { slug: { eq: "/blog/2024/streaming/" } }) {
        id
        body
        fields {
          slug
        }
        frontmatter {
          title
          summary
          date(formatString: "DD MMMM, YYYY")
          cover {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                quality: 95
                transformOptions: { fit: COVER, cropFocus: CENTER, grayscale: false }
              )
            }
          }
        }
      }
    }
  `);

  console.log(blogPostData, 'checking post template query',);

  // Access the blog post data from the query result
  const blogPost = blogPostData.mdx;

  return (
    <div>
      <h2>{blogPost.frontmatter.title}</h2>
      {/* Render the MDX content as children */}
      <MDXProvider>
        <MDXContent />
      </MDXProvider>
    </div>
  );
};

export default BlogPostContent;