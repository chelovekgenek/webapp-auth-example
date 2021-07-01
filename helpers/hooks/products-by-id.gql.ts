import gql from "graphql-tag"

export const PRODUCT_BY_ID = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      title
      featuredImage {
        originalSrc
        altText
      }
      variants(first: 99) {
        edges {
          node {
            id
            title
            price
          }
        }
      }
      __typename
    }
  }
`

export const PRODUCTS_BY_ID = gql`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        id
        title
        featuredImage {
          originalSrc
          altText
        }
        variants(first: 99) {
          edges {
            node {
              id
              title
              price
            }
          }
        }
        __typename
      }
    }
  }
`
