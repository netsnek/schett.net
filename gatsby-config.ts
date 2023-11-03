import type {GatsbyConfig} from 'gatsby'

const config: GatsbyConfig = {
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  flags: {
    DEV_SSR: true
  },
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: `gatsby-plugin-jaen`,
      options: {
        snekResourceId: `0ee5d9f5-7580-4787-855f-4fc8bd89d3bf`
      }
    }
  ]
}

export default config
