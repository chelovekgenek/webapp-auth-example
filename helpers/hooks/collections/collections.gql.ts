import gql from "graphql-tag"

export const COLLECTIONS = gql`
  query collections(
    $firstCollection: Int!
    $afterCollection: String
    $firstProduct: Int!
    $afterProduct: String
    $query: String
  ) {
    collections(first: $firstCollection, after: $afterCollection, query: $query) {
      edges {
        cursor
        node {
          id
          title
          products(first: $firstProduct, after: $afterProduct) {
            edges {
              cursor
              node {
                id
                title
                featuredImage {
                  originalSrc
                  altText
                }
                __typename
              }
            }
            pageInfo {
              hasNextPage
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
