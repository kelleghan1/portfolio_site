import { type ApolloClient, type ApolloQueryResult, gql } from '@apollo/client'
import { type Query } from '../types/generatedGQLTypes'

export const getPortfolioItems = (graphQLClient: ApolloClient<unknown>) =>
  async (): Promise<ApolloQueryResult<Query>> =>
    await graphQLClient.query({
      query: gql`
        query Query {
          portfolioItems {
            githubLinks {
              url
              label
              isInternal
            }
            productLinks {
              url
              label
              isInternal
            }
            categories {
              name
            }
            products {
              name
            }
            primaryImage {
              imageUrl
            }
            name
            projectImages {
              imageUrl
            }
            projectId
            homeImage {
              imageUrl
            }
            description
          }
        }
      `,
      variables: {}
    })
