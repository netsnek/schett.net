import {Field, PageConfig, PageProps, snekResourceId} from '@atsnek/jaen'

import {Box, Button} from '@chakra-ui/react'
import {graphql} from 'gatsby'
import * as React from 'react'
import {sq} from '../client/src'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box as="main">
      <Field.Text name="welcome" placeholder="Welcome to your Jaen website!" />

      <Button
        onClick={() => {
          sq.query(q => q.resource({id: snekResourceId}).name).then(
            ([resource, errors]) => {
              console.log(resource, errors)
            }
          )
        }}>
        Resource
      </Button>
    </Box>
  )
}

export default IndexPage

export const pageConfig: PageConfig = {
  label: 'Home Page',
  icon: 'FaHome',
  childTemplates: ['BlogPage'],
  menu: {
    type: 'app'
  }
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
    allJaenPage {
      nodes {
        ...JaenPageData
        children {
          ...JaenPageData
        }
      }
    }
  }
`

export {Head} from '@atsnek/jaen'
