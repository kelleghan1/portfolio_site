import { gql } from '@apollo/client'

export const GET_PORTFOLIO_ITEMS = gql`
  query GetPortfolioItems {
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
`

export const GET_LINKS = gql`
  query GetLinks {
    links {
      id
      url
      label
      isInternal
      type {
        name
      }
    }
  }
`

export const GET_PROJECT_IMAGES = gql`
  query GetProjectImages {
    projectImages {
      id
      imageUrl
    }
  }
`

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
    }
  }
`

export const CREATE_PORTFOLIO_ITEMS = gql`
  mutation CreatePortfolioItem(
    $categories: [Int!]!,
    $description: String!,
    $links: [Int!]!,
    $homeImage: Int!,
    $projectImages: [Int!]!,
    $name: String!,
    $primaryImage: Int!,
    $products: [Int!]!,
    $projectId: String!) {
    createPortfolioItem(categories: $categories,
    description: $description,
    links: $links,
    homeImage: $homeImage,
    projectImages: $projectImages,
    name: $name,
    primaryImage: $primaryImage,
    products: $products,
    projectId: $projectId
  ) {
      success
      portfolioItem {
        categories {
          id
          name
        }
        description
        githubLinks {
          id
          isInternal
          label
          type {
            id
            name
          }
          url
        }
        links {
          id
          isInternal
          label
          url
        }
        homeImage {
          id
          imageUrl
        }
        id
        projectImages {
          id
          imageUrl
        }
        name
        primaryImage {
          id
          imageUrl
        }
        productLinks {
          id
          isInternal
          label
          url
        }
        products {
          id
          name
        }
        projectId
      }
    }
  }
`
