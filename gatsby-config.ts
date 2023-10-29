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
        snekResourceId: `a58477a4-6e2a-4dca-80a9-e59d86bcac10`
      }
    }
  ]
}

export default config
