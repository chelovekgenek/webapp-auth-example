import gql from "graphql-tag"

export const GET_ST_BY_SRC = gql`
  query getScriptTagsBySrc($first: Int) {
    scriptTags(first: $first) {
      edges {
        node {
          id
          src
          displayScope
        }
      }
    }
  }
`

export const ADD_ST = gql`
  mutation createScriptTag($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
        src
        displayScope
      }
    }
  }
`

export const DELETE_ST = gql`
  mutation deleteScriptTag($id: ID!) {
    scriptTagDelete(id: $id) {
      deletedScriptTagId
    }
  }
`
