import gql from "graphql-tag"

export const PRODUCTS = gql`
  query products($first: Int!, $after: String, $query: String) {
    products(first: $first, after: $after, query: $query) {
      edges {
        cursor
        node {
          id
          title
          featuredImage {
            originalSrc
            altText
          }
          variants(first: 50) {
            edges {
              node {
                id
                title
              }
            }
          }
          __typename
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
