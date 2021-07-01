import gql from "graphql-tag"

export const COLLECTION_BY_ID = gql`
  query getCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      products(first: 99) {
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
    }
  }
`
