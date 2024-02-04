import { GatsbyConfig } from 'gatsby';
import {
  siteMetadata
} from './src/data/siteMetadata';

const gatsbyConfig: GatsbyConfig = {
  siteMetadata,

  flags: {
    // Use DEV_SSR to debug the SSR related issues locally (i.e. hydration related ones).
    DEV_SSR: false,
  },

  plugins: [
    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/
    'gatsby-plugin-postcss',

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
    'gatsby-plugin-image',

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/
    'gatsby-plugin-react-helmet',

    // @see: https://www.npmjs.com/package/gatsby-plugin-sharp
    'gatsby-plugin-sharp',

    // @see: https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/
    {
      resolve: 'gatsby-transformer-sharp',
      options: {
        // Suppress the "You can't use childImageSharp together with 02-demo.gif —
        // use publicURL instead." warning.
        checkSupportedExtensions: false,
      },
    },

    // @see: https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },

    // @see: https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        plugins: [],
        gatsbyRemarkPlugins: [
          // @see: https://www.gatsbyjs.com/plugins/gatsby-remark-images/
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },

          // @see: https://www.gatsbyjs.com/plugins/gatsby-remark-images-medium-zoom/
          {
            resolve: 'gatsby-remark-images-medium-zoom',
            options: {
              background: '#fff',
            },
          },

          // @see: https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              isIconAfterHeader: true,
              className: 'gatsby-remark-autolink-header-anchor',
            },
          },

          // @see: https://www.gatsbyjs.com/plugins/gatsby-remark-images/
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },

          // @see: https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: false,
              aliases: {
                sh: 'shell',
                es6: 'javascript',
                js: 'javascript',
                env: 'bash',
                mdx: 'md',
                '.json': 'json',
              },
            },
          },

          // @see: https://www.gatsbyjs.com/plugins/gatsby-remark-copy-linked-files/?=gatsby-remark-copy-linked-files
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              // Ignoring these file extensions since they should be recognized and handled
              // by the gatsby-transformer-sharp plugin.
              // @see: https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/#parsing-algorithm
              ignoreFileExtensions: ['png', 'jpg', 'jpeg', 'tiff', 'tif', 'webp'],
              // Save files like `02-demo.gif`
              // to `public/posts-assets/2a0039f3a61f4510f41678438e4c863a/02-demo.gif`
              destinationDir: (f: { name: string, hash: string }): string => `posts-assets/${f.hash}/${f.name}`,
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `GatsbyJS`,
              short_name: `GatsbyJS`,
              start_url: `/`,
              background_color: `#f7f0eb`,
              theme_color: `#a2466c`,
              display: `standalone`,
              icon: `favicon-32x32.png`,
            },
          },
        ],
      },
    }
  ],
};

export default gatsbyConfig;
