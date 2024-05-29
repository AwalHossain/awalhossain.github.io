import { PageProps, graphql } from 'gatsby';
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

const NewPost = (props: BlogPostProps) => {
    const { data, children } = props;
    console.log(data, 'data from big', children, 'children from big');

}

export default NewPost;