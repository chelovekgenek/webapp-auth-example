import { useCallback, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useMutation, useQuery } from "@apollo/client"

import { AppAction, AppSelector } from "store/entities"

import { ADD_ST, DELETE_ST, GET_ST_BY_SRC } from "./use-script-tag.gql"
import {
  GetResult,
  GetInput,
  AddInput,
  AddResult,
  DeleteResult,
  DeleteInput,
  DISPLAY_SCOPE,
} from "./use-script-tag.types"

export const useScriptTag = () => {
  const dispatch = useDispatch()
  const installed = useSelector(AppSelector.isHookExecuted("useScriptTag"))

  const install = useCallback(() => {
    dispatch(AppAction.hook.executed("useScriptTag")), console.log("Script Tags are installed successfuly!")
  }, [])

  const skip = useMemo(() => !SHOPIFY_STOREFRONT_SCRIPT || installed, [])

  const { data } = useQuery<GetResult, GetInput>(GET_ST_BY_SRC, {
    variables: { first: 100 },
    skip,
  })

  const [addScriptTag] = useMutation<AddResult, AddInput>(ADD_ST, {
    variables: {
      input: {
        src: SHOPIFY_STOREFRONT_SCRIPT,
        displayScope: DISPLAY_SCOPE,
      },
    },
  })

  const [deleteScriptTag] = useMutation<DeleteResult, DeleteInput>(DELETE_ST)

  useEffect(() => {
    if (data && !skip) {
      let tagsCounter = 0
      for (const edge of data.scriptTags.edges) {
        if (edge.node.src === SHOPIFY_STOREFRONT_SCRIPT && edge.node.displayScope === DISPLAY_SCOPE) {
          tagsCounter++
        }
        if (
          edge.node.src !== SHOPIFY_STOREFRONT_SCRIPT ||
          edge.node.displayScope !== DISPLAY_SCOPE ||
          tagsCounter > 1
        ) {
          deleteScriptTag({ variables: { id: edge.node.id } })
        }
      }

      !tagsCounter
        ? addScriptTag().then(
          (result) => result.data?.scriptTagCreate.scriptTag.src === SHOPIFY_STOREFRONT_SCRIPT && install(),
        )
        : install()
    }
  }, [data, skip])

  return {}
}
